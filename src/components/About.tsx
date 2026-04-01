"use client";

import { motion } from "framer-motion";
import { FiUser, FiCode, FiGitBranch } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  { icon: <FiCode />, label: "Years Experience", value: "2+" },
  { icon: <FiGitBranch />, label: "Projects Completed", value: "10+" },
  { icon: <FiUser />, label: "Open Source Contributor", value: "Yes" },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-container">
        <SectionTitle title="About Me" subtitle="Get to know me a little better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="w-72 h-72 rounded-2xl flex items-center justify-center text-6xl font-black text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a2238, #0d1224)", border: "2px solid transparent", backgroundClip: "padding-box" }}
              >
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)", margin: "-2px", zIndex: -1 }} />
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, #1a2238, #0d1224)" }} />
                <div className="relative z-10 text-center">
                  <div className="gradient-text text-7xl font-black">NS</div>
                  <p className="text-gray-500 text-sm mt-2 font-mono">[Your Photo]</p>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
              >
                Full Stack Dev
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Hi, I&apos;m <span className="gradient-text">Nahid Shah</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hey, I am a student from Bangladesh, currently studying in Rangpur Zilla School, and I am passionate about web development and DevOps. With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences and efficient server-side solutions.
              </p>
              <p>
                I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and have strong experience with DevOps practices including Docker, CI/CD pipelines, and Linux server administration.
              </p>
              <p>
                When I&apos;m not coding, [placeholder for personal interests/hobbies].
              </p>
            </div>

            {/* Quick info */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-3">
                <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">Location</p>
                <p className="text-white font-medium mt-1">Rangpur, Bangladesh</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">Email</p>
                <p className="text-accent-blue font-medium mt-1 truncate">about@nahidshah.me</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">GitHub</p>
                <p className="text-white font-medium mt-1">nahid2012</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">Status</p>
                <p className="text-green-400 font-medium mt-1">Open to Work</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl text-accent-blue mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
