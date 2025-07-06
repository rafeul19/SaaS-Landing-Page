import { Container } from "../shared/Container";
import logo from "/assets/ChatBOT.png";
import { useThemeStore } from "../../store/ThemeStore";
import { motion } from "framer-motion";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

const navItemVariants = {
  initial: { color: "#64748b" },
  hover: { color: "#2563eb", scale: 1.08 },
  tap: { color: "#0ea5e9", scale: 0.96 },
};

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Animated Logo */}
          <motion.div
            className="min-w-max inline-flex relative"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{ scale: 1.08, rotate: -3 }}
          >
            <a href="/" className="relative flex items-center gap-3">
              <motion.img
                src={logo}
                alt="Nekko Logo"
                className="w-10 h-10 drop-shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="inline-flex text-lg font-semibold text-heading-1"
                style={{ fontFamily: "'Fascinate', cursive" }}
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                NekkoBOT
              </motion.div>
            </a>
          </motion.div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                      absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                      border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                           text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <motion.li
                  key={key}
                  variants={navItemVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative px-4 py-2 cursor-pointer font-semibold rounded-lg transition-colors duration-300 overflow-hidden"
                >
                  <a href={item.href} className="relative z-10">
                    {item.text}
                  </a>
                  {/* Animated underline */}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-0"
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>
            {/* 3D Animated Contact Us Button */}
            <motion.div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
    lg:pb-0 border-b border-box-border lg:border-0
    px-6 lg:px-0"
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.a
                href="#cta"
                className="relative flex items-center justify-center w-40 h-12 font-bold text-white bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.25)",
                  y: -2,
                }}
                whileTap={{
                  scale: 0.94,
                  boxShadow: "0 2px 8px 0 rgba(0, 123, 255, 0.15)",
                  y: 2,
                }}
              >
                <span className="relative z-10 select-none">Contact US</span>
              </motion.a>
            </motion.div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
