import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { navItems } from "./Navbar";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://twitter.com/", icon: "twitter", label: "Twitter" },
  { href: "https://facebook.com/", icon: "facebook", label: "Facebook" },
  { href: "https://github.com/", icon: "github", label: "GitHub" },
  { href: "mailto:support@example.com", icon: "mail", label: "Email" },
];

const iconMap: Record<string, JSX.Element> = {
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.28 4.28 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  mail: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.01 4.99A2 2 0 0 1 4 3h16a2 2 0 0 1 2 1.99v14.02A2 2 0 0 1 20 21H4a2 2 0 0 1-1.99-1.99V4.99zm2 0v.01L12 13l7.99-8.01V5H4zm0 2.13V19h16V7.12l-8 8-8-8z" />
    </svg>
  ),
};

const footerLinks = [
  { href: "#privacy", text: "Privacy Policy" },
  { href: "#terms", text: "Terms of Service" },
  { href: "#faq", text: "FAQ" },
  { href: "#support", text: "Support" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-8 h-8" alt="NekkoBOT Logo" />
            <span className="text-xl font-bold text-heading-1">NekkoBOT</span>
          </div>

          {/* Animated Nav Links */}
          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <motion.li
                key={key}
                whileHover={{ scale: 1.15, color: "#2563eb" }}
                whileTap={{ scale: 0.95, color: "#0ea5e9" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="cursor-pointer font-semibold"
              >
                <a href={item.href}>{item.text}</a>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2, color: "#2563eb" }}
                whileTap={{ scale: 0.9, color: "#0ea5e9" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-heading-1 hover:text-blue-500"
              >
                {iconMap[s.icon]}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-box-border" />

        {/* Extra Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-heading-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="text-xs text-heading-2 text-center">
            &copy; {new Date().getFullYear()} NekkoBOT. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
