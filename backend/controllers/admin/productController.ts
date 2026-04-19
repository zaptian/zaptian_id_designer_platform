import { Request, Response } from "express";
import { sequelize } from "../../config/db.js";
import Plan from "../../models/plan.js";
import PlanVersion from "../../models/planVersion.js";
import Coupon from "../../models/coupon.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { NotFoundError, BadRequestError } from "../../utils/appError.js";
import AuditLog from "../../models/auditLog.js";

/**
 * GET /api/admin/plans
 */
export const getPlans = catchAsync(async (req: Request, res: Response) => {
  const plans = await Plan.findAll({
    include: [{
      model: PlanVersion,
      as: "versions",
      where: { isCurrent: true },
      required: false,
    }],
  });

  res.status(200).json({
    success: true,
    data: plans,
  });
});

/**
 * POST /api/admin/plans
 */
export const createPlan = catchAsync(async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const plan = await Plan.create({ name, description });

  await AuditLog.create({
    adminId: req.user!.id,
    action: "created_plan",
    target: "plans",
    targetId: String(plan.id),
    details: { name },
    ipAddress: req.ip?.toString(),
  });

  res.status(201).json({ success: true, data: plan });
});

/**
 * POST /api/admin/plans/:id/versions
 */
export const createPlanVersion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { price, billingCycle, features } = req.body;

  const plan = await Plan.findByPk(Number(id));
  if (!plan) throw new NotFoundError("Plan not found");

  const result = await sequelize.transaction(async (t) => {
    // 1. Mark existing versions as not current
    await PlanVersion.update(
      { isCurrent: false },
      { where: { planId: id, billingCycle }, transaction: t }
    );

    // 2. Create new version as current
    const newVersion = await PlanVersion.create({
      planId: Number(id),
      price,
      billingCycle,
      features,
      isCurrent: true,
    }, { transaction: t });

    return newVersion;
  });

  await AuditLog.create({
    adminId: req.user!.id,
    action: "updated_plan_pricing",
    target: "plans",
    targetId: String(plan.id),
    details: { price, billingCycle },
    ipAddress: req.ip?.toString(),
  });

  res.status(201).json({ success: true, data: result });
});

/**
 * GET /api/admin/coupons
 */
export const getCoupons = catchAsync(async (req: Request, res: Response) => {
  const coupons = await Coupon.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json({ success: true, data: coupons });
});

/**
 * POST /api/admin/coupons
 */
export const createCoupon = catchAsync(async (req: Request, res: Response) => {
  const coupon = await Coupon.create(req.body);

  await AuditLog.create({
    adminId: req.user!.id,
    action: "created_coupon",
    target: "coupons",
    targetId: String(coupon.id),
    details: { code: coupon.code },
    ipAddress: req.ip?.toString(),
  });

  res.status(201).json({ success: true, data: coupon });
});

/**
 * PATCH /api/admin/coupons/:id/toggle
 */
export const toggleCoupon = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const coupon = await Coupon.findByPk(Number(id));
  if (!coupon) throw new NotFoundError("Coupon not found");

  coupon.status = coupon.status === "active" ? "inactive" : "active";
  await coupon.save();

  await AuditLog.create({
    adminId: req.user!.id,
    action: `coupon_status_${coupon.status}`,
    target: "coupons",
    targetId: String(coupon.id),
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({ success: true, data: coupon });
});
