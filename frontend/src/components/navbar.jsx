import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Globe, Sun, Moon, Menu, X, ChevronDown } from "../assets/icons";
import { navData } from "../data/navdata";
import logoLight from "../assets/logo/logo_light.webp";
import logoDark from "../assets/logo/logo_dark.webp";
import { NavItem } from "./navbar/NavItem";
import { MobileNavItem } from "./navbar/MobileNavItem";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Scroll locking logic
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeLanguage = (langCode) => {
    // Try both standard and Google-specific selectors
    const selectField =
      document.querySelector(".goog-te-combo") ||
      document.querySelector("#google_translate_element select");

    if (selectField) {
      selectField.value = langCode;
      selectField.dispatchEvent(new Event("change"));
      setCurrentLang(langCode);
    }
    setLangOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "zh-CN", label: "Chinese" },
    { code: "es", label: "Spanish" },
    { code: "ar", label: "Arabic" },
    { code: "hi", label: "Hindi" },
    { code: "fr", label: "French" },
    { code: "ru", label: "Russian" },
    { code: "pt", label: "Portuguese" },
    { code: "de", label: "German" },
    { code: "ja", label: "Japanese" },
    { code: "ko", label: "Korean" },
    { code: "it", label: "Italian" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border font-dm">
      {/* Google Translate Element is now in index.html for reliable loading */}

      {/* Desktop Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
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

        {/* Desktop Menu */}
        <ul className="hidden min-[990px]:flex items-center gap-1">
          {navData.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden min-[990px]:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-light-border dark:border-dark-border rounded-md text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-button-primary dark:hover:text-button-primary transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase notranslate">{currentLang}</span>
              <ChevronDown
                size={12}
                className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-light-bg dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-light-hover dark:hover:bg-dark-hover transition-colors notranslate
                      ${currentLang === lang.code ? "text-button-primary font-semibold" : "text-light-text dark:text-dark-text"}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/sign_in")}
              className="text-sm font-medium text-light-text dark:text-dark-text hover:text-button-primary dark:hover:text-button-primary px-3 py-1.5 transition-colors"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/sign_up")}
              className="text-sm font-medium text-button-primary border border-button-outline-border px-4 py-1.5 rounded-md hover:bg-button-outline-hover transition-colors"
            >
              Sign Up
            </button>
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="min-[990px]:hidden text-light-text dark:text-dark-text focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-page Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-light-bg dark:bg-dark-bg transition-transform duration-300 transform min-[990px]:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-light-border dark:border-dark-border">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src={logoDark}
              alt="Zaptian Logo"
              className="w-36 dark:hidden block"
            />
            <img
              src={logoLight}
              alt="Zaptian Logo"
              className="w-36 hidden dark:block"
            />
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-light-text dark:text-dark-text"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Mobile Menu Content */}
        <div className="px-6 py-6 h-[calc(100vh-73px)] overflow-y-auto pb-32">
          <ul className="flex flex-col gap-2">
            {navData.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={closeMenu} />
            ))}

            {/* Mobile Language Selector (integrated into list) */}
            <li className="list-none pt-2">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className={`w-full flex items-center justify-between text-sm font-medium py-3 border-t border-light-border/40 dark:border-dark-border/40 transition-colors
                  ${mobileLangOpen ? "text-button-primary" : "text-light-text dark:text-dark-text"}`}
              >
                <div className="flex items-center gap-2">
                  <Globe size={18} />
                  <span>Language</span>
                </div>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileLangOpen && (
                <div className="pl-4 flex flex-col gap-0.5 pb-4 animate-fadeInSimple">
                  {languages.map((lang) => {
                    const isActive = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          closeMenu();
                        }}
                        className={`w-full text-left py-2.5 text-sm transition-all notranslate flex items-center justify-between pr-4
                          ${
                            isActive
                              ? "text-button-primary font-bold"
                              : "text-light-text dark:text-dark-text hover:text-button-primary"
                          }`}
                      >
                        {lang.label}
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-button-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </li>
          </ul>

          {/* Bottom Row Actions */}
          <div className="mt-8 pt-8 border-t border-light-border dark:border-dark-border flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-light-text dark:text-dark-text">
                Appearance
              </span>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/sign_in")}
                className="w-full text-center py-3 text-sm font-medium text-light-text dark:text-dark-text border border-light-border dark:border-dark-border rounded-lg shadow-sm"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/sign_up")}
                className="w-full text-center py-3 text-sm font-medium text-white bg-button-primary rounded-lg shadow-lg shadow-button-primary/20"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
