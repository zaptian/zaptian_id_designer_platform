import { Request, Response, NextFunction } from "express";
import { Op } from "sequelize";
import User from "../../models/user.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { NotFoundError, BadRequestError } from "../../utils/appError.js";
import AuditLog from "../../models/auditLog.js";

/**
 * GET /api/admin/users
 * List users with search, filtering and pagination
 */
export const getUsers = catchAsync(async (req: Request, res: Response) => {
  const { search, role, status, page = 1, limit = 10 } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  const where: any = {};

  if (search) {
    where[Op.or] = [
      { firstName: { [Op.like]: `%${search}%` } },
      { lastName: { [Op.like]: `%${search}%` } },
      { email: { [Op.like]: `%${search}%` } },
    ];
  }

  if (role) where.role = role;
  if (status) where.status = status;

  const { count, rows: users } = await User.findAndCountAll({
    where,
    limit: Number(limit),
    offset,
    order: [["createdAt", "DESC"]],
    attributes: { exclude: ["password"] },
  });

  res.status(200).json({
    success: true,
    data: users,
    pagination: {
      total: count,
      page: Number(page),
      limit: Number(limit),
      pages: Math.ceil(count / Number(limit)),
    },
  });
});

/**
 * PATCH /api/admin/users/:id/status
 */
export const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
  const { status } = req.body;
  const { id } = req.params;

  if (!["active", "suspended", "deleted"].includes(status)) {
    throw new BadRequestError("Invalid status value");
  }

  const user = await User.findByPk(Number(id));
  if (!user) throw new NotFoundError("User not found");

  const oldStatus = user.status;
  user.status = status;
  await user.save();

  // Audit Log
  await AuditLog.create({
    adminId: req.user!.id,
    action: `updated_status_${status}`,
    target: "users",
    targetId: String(user.id),
    details: { from: oldStatus, to: status },
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({
    success: true,
    message: `User status updated to ${status}`,
    data: user,
  });
});

/**
 * PATCH /api/admin/users/:id/role
 */
export const updateUserRole = catchAsync(async (req: Request, res: Response) => {
  const { role } = req.body;
  const { id } = req.params;

  if (!["USER", "ADMIN", "SUPER_ADMIN", "SUPPORT"].includes(role)) {
    throw new BadRequestError("Invalid role value");
  }

  const user = await User.findByPk(Number(id));
  if (!user) throw new NotFoundError("User not found");

  const oldRole = user.role;
  user.role = role;
  await user.save();

  // Audit Log
  await AuditLog.create({
    adminId: req.user!.id,
    action: `updated_role_${role}`,
    target: "users",
    targetId: String(user.id),
    details: { from: oldRole, to: role },
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({
    success: true,
    message: `User role updated to ${role}`,
    data: user,
  });
});

/**
 * PATCH /api/admin/users/:id/permissions
 */
export const updateUserPermissions = catchAsync(async (req: Request, res: Response) => {
  const { permissions } = req.body;
  const { id } = req.params;

  const user = await User.findByPk(Number(id));
  if (!user) throw new NotFoundError("User not found");

  user.permissions = permissions;
  await user.save();

  // Audit Log
  await AuditLog.create({
    adminId: req.user!.id,
    action: "updated_permissions",
    target: "users",
    targetId: String(user.id),
    details: { permissions },
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({
    success: true,
    message: "User permissions updated successfully",
    data: user,
  });
});
