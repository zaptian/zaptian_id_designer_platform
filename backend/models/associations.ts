import User from "./user.js";
import Partner from "./partner.js";
import Payment from "./payment.js";
import Plan from "./plan.js";
import PlanVersion from "./planVersion.js";
import Subscription from "./subscription.js";
import AuditLog from "./auditLog.js";

export const setupAssociations = () => {
  // User <-> Partner
  Partner.hasMany(User, { foreignKey: "partnerId", as: "users" });
  User.belongsTo(Partner, { foreignKey: "partnerId", as: "partner" });

  // User <-> Payment
  User.hasMany(Payment, { foreignKey: "userId", as: "payments" });
  Payment.belongsTo(User, { foreignKey: "userId", as: "user" });

  // User <-> AuditLog
  User.hasMany(AuditLog, { foreignKey: "adminId", as: "logs" });
  AuditLog.belongsTo(User, { foreignKey: "adminId", as: "admin" });

  // Plan <-> PlanVersion
  Plan.hasMany(PlanVersion, { foreignKey: "planId", as: "versions" });
  PlanVersion.belongsTo(Plan, { foreignKey: "planId", as: "plan" });

  // User <-> Subscription
  User.hasOne(Subscription, { foreignKey: "userId", as: "subscription" });
  Subscription.belongsTo(User, { foreignKey: "userId", as: "user" });

  // PlanVersion <-> Subscription
  PlanVersion.hasMany(Subscription, { foreignKey: "planVersionId", as: "subscriptions" });
  Subscription.belongsTo(PlanVersion, { foreignKey: "planVersionId", as: "planVersion" });
};
