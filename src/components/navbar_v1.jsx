// import { useState } from "react"
// import { Globe, Sun, Moon, Menu, X } from "../assets/icons"

// function Navbar() {
//   const [darkMode, setDarkMode] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   const toggleDarkMode = () => {
//   setDarkMode(!darkMode)
//   if (!darkMode) {
//     document.documentElement.classList.add("dark")
//   } else {
//     document.documentElement.classList.remove("dark")
//   }
// }

//   const navLinks = ["Product", "Solutions", "Customers", "Resources", "Company", "Pricing"]

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border font-dm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//           {/* Left - Brand */}
//           <span className="text-2xl font-bold text-button-primary">Zaptian</span>

//           {/* Center - Nav Links (desktop) */}
//           <ul className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link}>
//                 <a
//                   href="#"
//                   className="text-light-text dark:text-dark-text hover:text-button-primary dark:hover:text-button-primary text-sm font-medium transition-colors"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Right - Actions (desktop) */}
//           <div className="hidden md:flex items-center gap-4">
//             {/* Language */}
//             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-light-border dark:border-dark-border rounded-md text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-button-primary dark:hover:text-button-primary transition-colors">
//                 <Globe size={16} />
//                 <span>EN</span>
//             </button>

//             {/* Login */}
//             <button className="text-sm font-medium text-button-primary border border-button-outline-border px-4 py-1.5 rounded-md hover:bg-button-outline-hover transition-colors">
//               Login
//             </button>

//             {/* Dark/Light Toggle */}
//             <button
//               onClick={toggleDarkMode}
//               className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover dark:bg-dark-hover text-lg transition-colors"
//             >
//               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//           </div>

//           {/* Hamburger (mobile) */}
//           <button
//             className="md:hidden text-light-text dark:text-dark-text text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden px-6 pb-4 bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
//             <ul className="flex flex-col items-center gap-4 mt-4">
//               {navLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-light-text dark:text-dark-text hover:text-button-primary text-sm font-medium transition-colors"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             {/* Bottom Row - EN left, Login + Toggle right */}
//             <div className="flex items-center justify-between mt-4 pt-4 border-t border-light-border dark:border-dark-border">
            
//             {/* Left - Language */}
//             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-light-border dark:border-dark-border rounded-md text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-button-primary dark:hover:text-button-primary transition-colors">
//                 <Globe size={16} />
//                 <span>EN</span>
//             </button>

//             {/* Right - Login + Toggle */}
//             <div className="flex items-center gap-3">
//                 <button className="text-sm font-medium text-button-primary border border-button-outline-border px-4 py-1.5 rounded-md hover:bg-button-outline-hover transition-colors">
//                 Login
//                 </button>
//                 <button
//                 onClick={toggleDarkMode}
//                 className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover dark:bg-dark-hover text-lg"
//                 >
//                 {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//                 </button>
//             </div>

//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }

// export default Navbar