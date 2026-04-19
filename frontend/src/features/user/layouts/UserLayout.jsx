import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  User,
  CreditCard,
  Shield,
  LogOut,
  Menu,
  ChevronLeft,
  X,
  Sun,
  Moon,
} from "lucide-react";
import logoLight from "@/assets/logo/logo_light.webp";
import logoDark from "@/assets/logo/logo_dark.webp";

export default function UserLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sync theme toggle and close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, [location.pathname]);

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Profile Settings", icon: User, path: "/dashboard/profile" },
    { name: "Billing & Plans", icon: CreditCard, path: "/dashboard/billing" },
    {
      name: "Security & Sessions",
      icon: Shield,
      path: "/dashboard/security",
    },
  ];

  const getIcon = (item) => item.icon || Shield;

  const NavLinks = ({ mobile }) => (
    <ul className="space-y-2 mt-6">
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.path ||
          (item.path !== "/dashboard" &&
            location.pathname.startsWith(item.path));
        const Icon = item.icon || Shield;
        return (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive
                  ? "bg-button-primary text-white shadow-md shadow-button-primary/20"
                  : "text-light-text2 dark:text-gray-400 hover:bg-light-hover dark:hover:bg-white/5 hover:text-light-text1 dark:hover:text-white"
              }`}
            >
              <Icon size={20} className={isActive ? "text-white" : ""} />
              <span
                className={mobile ? "block" : sidebarOpen ? "block" : "hidden"}
              >
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg font-dm flex transition-colors duration-300 relative">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-light-border dark:border-white/5 bg-light-card1 dark:bg-[#111827] transition-all duration-300 ${
          sidebarOpen ? "w-72" : "w-20"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-4 border-b border-light-border dark:border-white/5">
          {sidebarOpen ? (
            <Link to="/" className="block">
              <img
                src={logoDark}
                alt="Zaptian Logo"
                className="w-32 dark:hidden block"
              />
              <img
                src={logoLight}
                alt="Zaptian Logo"
                className="w-32 hidden dark:block"
              />
            </Link>
          ) : (
            <div className="w-8 h-8 mx-auto bg-button-primary rounded-lg flex items-center justify-center text-white font-black text-xl shadow-md">
              Z
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-light-text2 dark:text-gray-400 hover:text-button-primary transition-colors"
          >
            {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3">
          <NavLinks mobile={false} />
        </div>

        <div className="p-4 border-t border-light-border dark:border-white/5">
          <div
            className={`p-4 bg-light-bg/50 dark:bg-black/20 border border-light-border dark:border-white/5 rounded-2xl mb-4 flex items-center gap-3 ${!sidebarOpen && "justify-center"}`}
          >
            <div className="w-10 h-10 rounded-full bg-button-primary text-white flex items-center justify-center font-bold shrink-0">
              {user?.firstName?.charAt(0).toUpperCase() || "U"}
            </div>
            {sidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-light-text1 dark:text-white truncate">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-light-text2 dark:text-gray-400 truncate">
                  {user?.role || "USER"}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors ${!sidebarOpen && "justify-center px-0"}`}
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-light-bg dark:bg-[#0c0c0e]">
        {/* Top Header */}
        <header className="h-20 bg-light-card1 dark:bg-[#111827] border-b border-light-border dark:border-white/5 flex items-center justify-between px-4 lg:px-8 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-light-text1 dark:text-white hover:text-button-primary transition-colors"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-bold text-light-text1 dark:text-white md:block hidden">
              User Panel
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-light-hover dark:bg-white/5 flex items-center justify-center text-light-text2 dark:text-gray-400 hover:text-light-text1 dark:hover:text-white transition-colors border border-light-border dark:border-white/5"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/"
              className="hidden sm:flex text-sm font-bold text-button-primary hover:underline items-center gap-1"
            >
              Back to Website
            </Link>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-light-card1 dark:bg-[#111827] shadow-2xl transform transition-transform duration-300 md:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-light-border dark:border-white/5">
          <Link to="/" className="block">
            <img
              src={logoDark}
              alt="Zaptian Logo"
              className="w-32 dark:hidden block"
            />
            <img
              src={logoLight}
              alt="Zaptian Logo"
              className="w-32 hidden dark:block"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-light-text2 dark:text-gray-400 hover:text-button-primary"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          <NavLinks mobile={true} />
        </div>

        <div className="p-4 border-t border-light-border dark:border-white/5">
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 bg-red-50 dark:bg-red-500/5 hover:bg-red-100 dark:hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
