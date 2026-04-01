"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-accent-blue bg-transparent text-white placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 text-sm";

  const socialLinks = [
    { icon: <FaGithub size={20} />, label: "GitHub", url: "https://github.com/nahid2012", color: "#ffffff" },
    { icon: <FaFacebook size={20} />, label: "Facebook", url: "https://facebook.com/nahidshah2012", color: "#1877f2" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", url: "#", color: "#0a66c2" },
    { icon: <FaEnvelope size={20} />, label: "Email", url: "mailto:about@nahidshah.me", color: "#ea4335" },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: submitted
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #3b82f6, #a855f7)",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something great.
                Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.15)" }}
                >
                  <FaEnvelope className="text-accent-blue" size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono uppercase">Email</p>
                  <p className="text-white font-medium">about@nahidshah.me</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(168,85,247,0.15)" }}
                >
                  <FaMapMarkerAlt className="text-accent-purple" size={16} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono uppercase">Location</p>
                  <p className="text-white font-medium">Rangpur, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-4">Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-3.5 flex items-center gap-3 hover:scale-105 transition-all duration-300 group"
                  >
                    <span style={{ color: social.color }} className="transition-transform group-hover:scale-110">
                      {social.icon}
                    </span>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
