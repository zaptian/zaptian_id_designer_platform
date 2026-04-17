import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown } from "../../assets/icons";
import { DropdownMenu } from "./DropdownMenu";

export function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Check if any nested link is active
  const isActive = item.sections.some((section) =>
    section.links.some((link) => location.pathname === link.path)
  );

  return (
    <li ref={ref} className="relative list-none">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 text-sm font-medium transition-colors px-1 py-2
          ${
            open || isActive
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
