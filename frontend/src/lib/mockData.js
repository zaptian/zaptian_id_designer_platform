/**
 * mockData.js
 * Professional SAAS sample data for the Zaptian Admin Dashboard.
 */

export const mockStats = {
  totalUsers: 12840,
  activeSubscriptions: 8420,
  mrr: 42500,
  churnRate: "2.4%",
  conversionRate: "12.8%",
  revenueTrend: [
    { date: "2024-01", amount: 38000 },
    { date: "2024-02", amount: 39500 },
    { date: "2024-03", amount: 41000 },
    { date: "2024-04", amount: 42500 },
  ],
};

export const mockUsers = [
  {
    id: "USR-001",
    name: "John Doe",
    email: "john@example.com",
    role: "USER",
    status: "active",
    plan: "Pro",
    joinedDate: "2024-01-15",
    lastLogin: "2024-04-18 10:30",
  },
  {
    id: "USR-002",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "SUPPORT",
    status: "active",
    plan: "Free",
    permissions: ["view_users", "view_payments"],
    joinedDate: "2024-02-10",
    lastLogin: "2024-04-17 15:45",
  },
  {
    id: "USR-003",
    name: "Admin User",
    email: "admin@zaptian.com",
    role: "ADMIN",
    status: "active",
    plan: "Enterprise",
    joinedDate: "2023-12-01",
    lastLogin: "2024-04-18 09:00",
  },
];

export const mockPayments = [
  {
    id: "TXN-7821",
    userId: "USR-001",
    userName: "John Doe",
    amount: 49.99,
    currency: "USD",
    gateway: "Stripe",
    status: "success",
    date: "2024-04-18 14:20",
  },
  {
    id: "TXN-7822",
    userId: "USR-002",
    userName: "Jane Smith",
    amount: 2999,
    currency: "INR",
    gateway: "Razorpay",
    status: "pending",
    date: "2024-04-18 16:05",
  },
];

export const mockPartners = [
  {
    id: "PTN-001",
    name: "Global Edu Corp",
    type: "School",
    userCount: 1200,
    totalRevenue: 15600,
    commission: "15%",
    status: "active",
  },
];

export const mockLogs = [
  {
    id: 1,
    admin: "Super Admin",
    action: "Updated Plan Pricing",
    target: "Pro Plan",
    timestamp: "2024-04-18 11:30",
    details: { before: "$39/mo", after: "$49/mo" },
  },
];
