import { Router } from "express";
import { protect, restrictTo } from "../middlewares/authMiddleware.js";
import * as userController from "../controllers/admin/userController.js";
import * as financeController from "../controllers/admin/financeController.js";
import * as productController from "../controllers/admin/productController.js";
import * as systemController from "../controllers/admin/systemController.js";

const router = Router();

// Protect all admin routes
router.use(protect);
router.use(restrictTo("ADMIN", "SUPER_ADMIN", "SUPPORT"));

// --- User Management ---
router.get("/users", userController.getUsers);
router.patch("/users/:id/status", userController.updateUserStatus);
router.patch("/users/:id/role", userController.updateUserRole);
router.patch("/users/:id/permissions", userController.updateUserPermissions);

// --- Finance & Partners ---
router.get("/partners", financeController.getPartners);
router.post("/partners", financeController.createPartner);
router.patch("/partners/:id", financeController.updatePartner);
router.get("/payments", financeController.getPayments);
router.post("/payments/:id/refund", financeController.refundPayment);

// --- Products & Coupons ---
router.get("/plans", productController.getPlans);
router.post("/plans", productController.createPlan);
router.post("/plans/:id/versions", productController.createPlanVersion);
router.get("/coupons", productController.getCoupons);
router.post("/coupons", productController.createCoupon);
router.patch("/coupons/:id/toggle", productController.toggleCoupon);

// --- System & Insights ---
router.get("/stats", systemController.getDashboardStats);
router.get("/updates", systemController.getUpdates);
router.get("/audit-logs", systemController.getAuditLogs);
router.get("/settings", systemController.getSettings);
router.patch("/settings", systemController.updateSettings);

export default router;
