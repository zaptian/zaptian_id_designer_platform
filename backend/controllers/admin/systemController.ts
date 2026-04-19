import { Request, Response } from "express";
import { Op } from "sequelize";
import { sequelize } from "../../config/db.js";
import User from "../../models/user.js";
import Payment from "../../models/payment.js";
import Subscription from "../../models/subscription.js";
import AuditLog from "../../models/auditLog.js";
import SystemSetting from "../../models/systemSetting.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { NotFoundError } from "../../utils/appError.js";
import * as githubService from "../../utils/githubService.js";

/**
 * GET /api/admin/stats
 * Aggregated platform metrics
 */
export const getDashboardStats = catchAsync(async (req: Request, res: Response) => {
  // 1. Core Metrics
  const totalUsers = await User.count({ where: { role: "USER" } });
  const activeSubscriptions = await Subscription.count({ where: { status: "active" } });
  
  const mrrResult: any = await Subscription.findAll({
    where: { status: "active" },
    attributes: [
      [sequelize.fn("SUM", sequelize.col("pricePaid")), "totalMRR"],
    ],
    raw: true,
  });
  const mrr = Number(mrrResult[0]?.totalMRR || 0);

  // 2. Revenue Trend (Last 6 Months)
  const revenueTrend = await Payment.findAll({
    where: {
      status: "success",
      createdAt: {
        [Op.gte]: sequelize.literal("DATE_SUB(NOW(), INTERVAL 6 MONTH)"),
      },
    },
    attributes: [
      [sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%Y-%m"), "date"],
      [sequelize.fn("SUM", sequelize.col("amount")), "amount"],
    ],
    group: ["date"],
    order: [["date", "ASC"]],
    raw: true,
  });

  res.status(200).json({
    success: true,
    data: {
      totalUsers,
      activeSubscriptions,
      mrr,
      churnRate: "2.1%", // Static for now
      revenueTrend,
    },
  });
});

/**
 * GET /api/admin/audit-logs
 */
export const getAuditLogs = catchAsync(async (req: Request, res: Response) => {
  const { limit = 50, page = 1 } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  const logs = await AuditLog.findAll({
    limit: Number(limit),
    offset,
    order: [["createdAt", "DESC"]],
    include: [{
      model: User,
      as: "admin",
      attributes: ["id", "firstName", "lastName", "email"],
    }],
  });

  res.status(200).json({
    success: true,
    data: logs,
  });
});

/**
 * GET /api/admin/settings
 */
export const getSettings = catchAsync(async (req: Request, res: Response) => {
  const settings = await SystemSetting.findAll();
  res.status(200).json({ success: true, data: settings });
});

/**
 * PATCH /api/admin/settings
 */
export const updateSettings = catchAsync(async (req: Request, res: Response) => {
  const { settings } = req.body; // Array of { key, value }

  const results = await sequelize.transaction(async (t) => {
    return Promise.all(
      settings.map(async (s: { key: string; value: string }) => {
        const setting = await SystemSetting.findOne({ where: { key: s.key }, transaction: t });
        if (setting) {
          setting.value = s.value;
          return setting.save({ transaction: t });
        }
        return SystemSetting.create({ key: s.key, value: s.value, section: "General" }, { transaction: t });
      })
    );
  });

  await AuditLog.create({
    adminId: req.user!.id,
    action: "updated_system_settings",
    target: "settings",
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({ success: true, data: results });
});

/**
 * GET /api/admin/updates
 */
export const getUpdates = catchAsync(async (req: Request, res: Response) => {
  const releases = await githubService.getLatestReleases();
  const commits = await githubService.getRecentCommits();

  res.status(200).json({
    success: true,
    data: { releases, commits },
  });
});
