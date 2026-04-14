import { useState, useRef, useEffect } from "react";
import { Globe, Sun, Moon, Menu, X, ChevronDown } from "../assets/icons";
import { navData } from "../data/navdata";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoLight from "../assets/logo/logo_light.webp";
import logoDark from "../assets/logo/logo_dark.webp";

function DropdownMenu({ sections }) {
  const isMultiSection = sections.length > 1;

  return (
    <div
      className="absolute top-full left-0 mt-3 bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-xl shadow-lg z-50 p-4 animate-fadeIn"
      style={{ minWidth: "200px" }}
    >
      {/* Arrow */}
      <div
        className="relative flex gap-8"
        style={{ minWidth: isMultiSection ? "480px " : "200px" }}
      >
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col gap-1 flex-1">
            {section.heading && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-button-primary uppercase tracking-wider">
                  {section.heading}
                </span>
                <div className="flex-1 h-px bg-light-border dark:border-dark-border" />
              </div>
            )}
            {section.links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm text-light-text2 dark:text-dark-text2 hover:text-button-primary dark:hover:text-button-primary hover:bg-light-hover dark:hover:bg-dark-hover px-3 py-1.5 rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors px-1 py-2
          ${
            open
              ? "text-button-primary"
              : "text-light-text dark:text-dark-text hover:text-button-primary dark:hover:text-button-primary"
          }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <DropdownMenu sections={item.sections} />}
    </li>
  );
}

function MobileNavItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-medium text-light-text dark:text-dark-text py-2 transition-colors"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pl-4 flex flex-col gap-1 mb-2">
          {item.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <p className="text-xs font-semibold text-button-primary uppercase tracking-wider mt-3 mb-1">
                  {section.heading}
                </p>
              )}
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block text-sm text-light-text2 dark:text-dark-text2 hover:text-button-primary py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border font-dm">
        {/* Desktop Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left - Brand */}
          <Link
            to="/"
            className="flex items-center transition-transform hover:scale-105 active:scale-95"
          >
            <img
              src={logoDark}
              alt="Zaptian Logo"
              className="w-36 md:w-46 lg:w-52 object-contain dark:hidden block"
            />
            <img
              src={logoLight}
              alt="Zaptian Logo"
              className="w-36 md:w-46 lg:w-52 object-contain hidden dark:block"
            />
          </Link>

          {/* Center - Nav Links (desktop) */}
          <ul className="hidden nav_desktop_menu_open items-center gap-1">
            {navData.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>

          {/* Right - Actions (desktop) */}
          <div className="hidden nav_desktop_menu_open items-center gap-3">
            {/* Language */}
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-light-border dark:border-dark-border rounded-md text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-button-primary dark:hover:text-button-primary transition-colors">
              <Globe size={16} />
              <span>EN</span>
            </button>

            {/* Login */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/sign_in")}
                className="text-sm font-medium text-light-text dark:text-dark-text hover:text-button-primary dark:hover:text-button-primary px-3 py-1.5 transition-colors"
              >
                Log in
              </button>

              {/* Sign Up */}
              <button
                onClick={() => navigate("/sign_up")}
                className="text-sm font-medium text-button-primary border border-button-outline-border px-4 py-1.5 rounded-md hover:bg-button-outline-hover transition-colors"
              >
                Sign Up
              </button>
            </div>

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="nav_hamburger_menu_close text-light-text dark:text-dark-text"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="nav_hamburger_menu_close px-6 pb-4 bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
            {/* Nav Links */}
            <ul className="flex flex-col mt-2 divide-y divide-light-border dark:divide-dark-border">
              {navData.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </ul>

            {/* Bottom Row */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-light-border dark:border-dark-border">
              {/* Left - Language */}
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-light-border dark:border-dark-border rounded-md text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <Globe size={16} />
                <span>EN</span>
              </button>

              {/* Right - Login + Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("/sign_in")}
                  className="text-sm font-medium text-button-primary border border-button-outline-border px-4 py-1.5 rounded-md hover:bg-button-outline-hover transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
