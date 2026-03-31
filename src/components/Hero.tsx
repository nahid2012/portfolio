"use client";

import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1224 50%, #0a0e1a 100%)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)", animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)", animation: "float 10s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-accent-blue text-lg sm:text-xl font-mono">👋 Hello, I&apos;m</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="gradient-text">Nahid Shah</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            Full Stack Developer{" "}
            <span className="text-accent-blue">|</span> MERN{" "}
            <span className="text-accent-purple">|</span> DevOps
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build scalable, modern web applications with clean code and great user experiences.
          Passionate about turning ideas into reality through technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #a855f7)",
              boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 border border-white/20 hover:border-accent-blue hover:bg-white/5"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center gap-5 mb-16"
        >
          <a
            href="https://github.com/nahid2012"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1)" }}
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://facebook.com/nahid2012"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <FaFacebook size={22} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors mx-auto"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <FaArrowDown size={14} />
        </motion.button>
      </div>
    </section>
  );
}
