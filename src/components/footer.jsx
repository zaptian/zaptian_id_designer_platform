import { socialLinks, getToKnowUs, legalLinks } from "../data/footerdata"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border font-dm">

      {/* Row 1 */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

        {/* Left - Zaptian */}
        <div className="flex-1 flex items-center justify-center">
          <span className="text-3xl font-bold text-button-primary">Zaptian</span>
        </div>

        {/* Right - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ flex: 2 }}>

          {/* Get to know us */}
          <div>
            <h4 className="text-sm font-semibold text-light-text1 dark:text-dark-text1 mb-4 uppercase tracking-wider">
              Get to know us
            </h4>
            <ul className="flex flex-col gap-2">
              {getToKnowUs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-light-text2 dark:text-dark-text2 hover:text-button-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h4 className="text-sm font-semibold text-light-text1 dark:text-dark-text1 mb-4 uppercase tracking-wider">
              Connect with us
            </h4>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    to={social.path}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-light-text2 dark:text-dark-text2 hover:text-button-primary transition-colors"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-light-text1 dark:text-dark-text1 mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-light-text2 dark:text-dark-text2 hover:text-button-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Row 2 - Copyright */}
      <div className="border-t border-light-border dark:border-dark-border py-4 text-center">
        <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
          © 2026 Zaptian. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer