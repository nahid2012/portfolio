import { FaGithub, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: <FaGithub size={18} />, url: "https://github.com/nahid2012", label: "GitHub" },
  { icon: <FaFacebook size={18} />, url: "https://facebook.com/nahid2012", label: "Facebook" },
  { icon: <FaLinkedin size={18} />, url: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080b16", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
              >
                NS
              </div>
              <span className="font-bold text-white text-lg">Nahid Shah</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full Stack Developer building modern, scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4 font-mono">nahidshah.me</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-gray-600 text-sm">
            © 2024 Nahid Shah. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Made with <FaHeart className="text-red-500" size={12} /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
