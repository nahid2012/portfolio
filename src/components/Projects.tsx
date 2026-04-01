"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import SectionTitle from "@/components/ui/SectionTitle";

const projects = [
  {
    id: "study-helper",
    name: "Study Helper",
    description:
      "An note system built for SSC students that helps them organize study materials, generate quizzes, and get instant explanations for complex topics.",
    tech: ["PHP", "MySQL"],
    github: "https://github.com/nahid2012",
    live: "https://metro.nahidshah.pro.bd",
    status: "In Progress",
    featured: true,
    color: "from-blue-500/20 to-purple-500/20",
    accentColor: "#3b82f6",
  },
  {
    id: "placeholder-1",
    name: "[Project Name]",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "",
    status: "Completed",
    featured: false,
    color: "from-purple-500/20 to-cyan-500/20",
    accentColor: "#a855f7",
  },
  {
    id: "placeholder-2",
    name: "[Project Name]",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "",
    status: "Completed",
    featured: false,
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#06b6d4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some things I've built"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative glass rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.08)`,
              }}
            >
              {/* Gradient top bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.accentColor}, #a855f7)` }}
              />

              {/* Card header gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: `${project.accentColor}33`, border: `1px solid ${project.accentColor}66` }}
                >
                  {project.name.charAt(0)}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
                  >
                    <HiSparkles size={12} />
                    Featured
                  </div>
                )}

                {/* Status badge */}
                <div
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${
                    project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      : "bg-green-500/20 text-green-300 border border-green-500/30"
                  }`}
                >
                  {project.status}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-300"
                      style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white glass hover:bg-white/10 transition-all duration-200"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200"
                      style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }}
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/nahid2012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl glass text-gray-300 hover:text-white border border-white/10 hover:border-accent-blue transition-all duration-300 font-medium"
          >
            <FaGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
