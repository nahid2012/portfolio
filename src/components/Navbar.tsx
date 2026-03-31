"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

/** Hydration-safe client detection — no setState in useEffect */
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},  // subscribe: no-op unsubscribe
    () => true,      // getSnapshot: client always true
    () => false      // getServerSnapshot: server returns false
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
            >
              NS
            </div>
            <span className="hidden sm:block font-semibold text-white text-lg">Nahid Shah</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: "linear-gradient(90deg, #3b82f6, #a855f7)" }}
                />
              </a>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            {isClient && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg glass text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg glass text-gray-300 hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
