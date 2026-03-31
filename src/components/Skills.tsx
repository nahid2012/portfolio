"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt, FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiJavascript,
  SiPostman, SiFigma, SiGithub,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
      { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "REST APIs", icon: <FaDatabase />, color: "#a855f7" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
      { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
      { name: "Linux", icon: <FaLinux />, color: "#fcc624" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
      { name: "CI/CD", icon: <FaGitAlt />, color: "#3b82f6" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "VS Code", icon: <TbBrandVscode />, color: "#007acc" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="section-padding" style={{ background: "#0a0e1a" }}>
      <div className="max-container">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === cat.id
                  ? "text-white shadow-lg scale-105"
                  : "glass text-gray-400 hover:text-white hover:scale-105"
              }`}
              style={
                activeTab === cat.id
                  ? { background: "linear-gradient(135deg, #3b82f6, #a855f7)", boxShadow: "0 4px 20px rgba(59,130,246,0.3)" }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {activeCategory.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.07 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group"
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
