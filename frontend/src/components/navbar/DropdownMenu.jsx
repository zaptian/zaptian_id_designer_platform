import { Link, useLocation } from "react-router-dom";

export function DropdownMenu({ sections }) {
  const isMultiSection = sections.length > 1;
  const location = useLocation();

  return (
    <div className="absolute top-full left-0 mt-3 bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-xl shadow-lg z-50 p-4 animate-fadeIn min-w-[200px]">
      <div
        className="relative flex gap-8"
        style={{ minWidth: isMultiSection ? "480px" : "200px" }}
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
            {section.links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm px-3 py-1.5 rounded-md transition-all whitespace-nowrap 
                    ${
                      isActive
                        ? "text-button-primary bg-light-hover dark:bg-dark-hover font-semibold"
                        : "text-light-text2 dark:text-dark-text2 hover:text-button-primary dark:hover:text-button-primary hover:bg-light-hover dark:hover:bg-dark-hover"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
