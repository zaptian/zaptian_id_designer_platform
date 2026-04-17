import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "../../assets/icons";

export function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Check if any nested link is active
  const isAnyChildActive = item.sections.some((section) =>
    section.links.some((link) => location.pathname === link.path)
  );

  // Auto-expand if a child is active
  useEffect(() => {
    if (isAnyChildActive) {
      setOpen(true);
    }
  }, [isAnyChildActive]);

  return (
    <li className="list-none">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`w-full flex items-center justify-between text-sm font-medium py-2 transition-colors
          ${
            isAnyChildActive
              ? "text-button-primary"
              : "text-light-text dark:text-dark-text"
          }`}
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
                <p className="text-[10px] font-bold text-light-text-muted dark:text-dark-text-muted uppercase tracking-widest mt-3 mb-1">
                  {section.heading}
                </p>
              )}
              {section.links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={onClose}
                    className={`block text-sm py-2 transition-colors 
                      ${
                        isActive
                          ? "text-button-primary font-semibold"
                          : "text-light-text2 dark:text-dark-text2 hover:text-button-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
