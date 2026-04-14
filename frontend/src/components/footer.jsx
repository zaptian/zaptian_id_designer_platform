import { socialLinks, getToKnowUs, legalLinks } from "../data/footerdata";
import { Link } from "react-router-dom";
import footerEarth from "../assets/logo/footer_earth.gif";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border font-dm">
      {/* Row 1 */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Left - Zaptian Globe */}
        <div className="flex-1 flex flex-col items-center justify-center relative group">
          <div className="absolute inset-0 bg-button-primary/5 rounded-full blur-[80px] group-hover:bg-button-primary/10 transition-colors pointer-events-none" />
          <img
            src={footerEarth}
            alt="Zaptian Global Network"
            className="w-72 md:w-82 lg:w-92 object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
          />
        </div>

        {/* Right - 3 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items"
          style={{ flex: 2 }}
        >
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
            <ul className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                let Icon;
                switch (social.label.toLowerCase()) {
                  case "facebook":
                    Icon = FaFacebook;
                    break;
                  case "twitter":
                    Icon = FaXTwitter;
                    break;
                  case "instagram":
                    Icon = FaInstagram;
                    break;
                  case "linkedin":
                    Icon = FaLinkedin;
                    break;
                  case "reddit":
                    Icon = FaReddit;
                    break;
                  default:
                    Icon = null;
                }

                return (
                  <li key={social.label}>
                    <Link
                      to={social.path}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2.5 text-sm text-light-text2 dark:text-dark-text2 hover:text-button-primary transition-colors"
                    >
                      {Icon && (
                        <Icon
                          size={16}
                          className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-sm"
                        />
                      )}
                      <span className="font-medium">{social.label}</span>
                    </Link>
                  </li>
                );
              })}
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
  );
}

export default Footer;
