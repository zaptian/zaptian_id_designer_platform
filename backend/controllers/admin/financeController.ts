import { Request, Response } from "express";
import Partner from "../../models/partner.js";
import Payment from "../../models/payment.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { NotFoundError, BadRequestError } from "../../utils/appError.js";
import AuditLog from "../../models/auditLog.js";

/**
 * GET /api/admin/partners
 */
export const getPartners = catchAsync(async (req: Request, res: Response) => {
  const partners = await Partner.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json({
    success: true,
    data: partners,
  });
});

/**
 * POST /api/admin/partners
 */
export const createPartner = catchAsync(async (req: Request, res: Response) => {
  const { name, type, commissionRate } = req.body;

  const partner = await Partner.create({
    name,
    type,
    commissionRate,
  });

  // Audit Log
  await AuditLog.create({
    adminId: req.user!.id,
    action: "created_partner",
    target: "partners",
    targetId: String(partner.id),
    details: { name, type },
    ipAddress: req.ip?.toString(),
  });

  res.status(201).json({
    success: true,
    data: partner,
  });
});

/**
 * PATCH /api/admin/partners/:id
 */
export const updatePartner = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const partner = await Partner.findByPk(Number(id));
  if (!partner) throw new NotFoundError("Partner not found");

  await partner.update(req.body);

  // Audit Log
  await AuditLog.create({
    adminId: req.user!.id,
    action: "updated_partner",
    target: "partners",
    targetId: String(partner.id),
    details: req.body,
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({
    success: true,
    data: partner,
  });
});

/**
 * GET /api/admin/payments
 */
export const getPayments = catchAsync(async (req: Request, res: Response) => {
  const { status, limit = 20, page = 1 } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  const where: any = {};
  if (status) where.status = status;

  const { count, rows: payments } = await Payment.findAndCountAll({
    where,
    limit: Number(limit),
    offset,
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json({
    success: true,
    data: payments,
    pagination: {
      total: count,
      page: Number(page),
      limit: Number(limit),
    },
  });
});

/**
 * POST /api/admin/payments/:id/refund
 */
export const refundPayment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payment = await Payment.findByPk(Number(id));
  if (!payment) throw new NotFoundError("Payment record not found");

  if (payment.status !== "success") {
    throw new BadRequestError("Only successful payments can be refunded.");
  }

  // MOCK EXTERNAL GATEWAY CALL
  console.log(`[GateWay] Initiating refund for TXN: ${payment.transactionId}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  payment.status = "refunded";
  await payment.save();

  // Audit Log
  await AuditLog.create({
    adminId: req.user!.id,
    action: "refunded_payment",
    target: "payments",
    targetId: String(payment.id),
    details: { transactionId: payment.transactionId, amount: payment.amount },
    ipAddress: req.ip?.toString(),
  });

  res.status(200).json({
    success: true,
    message: "Refund processed successfully (Mock Mode)",
    data: payment,
  });
});
