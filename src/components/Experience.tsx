"use client";

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";

const experiences = [
  {
    role: "[Job Title]",
    company: "[Company Name]",
    period: "[Month Year] – Present",
    type: "Full-time",
    description: "[Placeholder: Describe your responsibilities, achievements, and technologies used in this role.]",
    bullets: [
      "Developed and maintained full-stack web applications using the MERN stack",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Implemented CI/CD pipelines to streamline deployment processes",
    ],
  },
  {
    role: "[Job Title / Internship]",
    company: "[Company Name]",
    period: "[Month Year] – [Month Year]",
    type: "Internship",
    description: "[Placeholder: Describe your internship role, what you learned, and contributed.]",
    bullets: [
      "Built RESTful APIs with Node.js and Express",
      "Worked with MongoDB to design and optimize database schemas",
      "Participated in code reviews and agile sprint planning",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "[Year] – Present",
    type: "Freelance",
    description: "Delivered custom web applications and solutions for clients.",
    bullets: [
      "Designed and developed client websites using React and Next.js",
      "Set up cloud infrastructure and deployment pipelines",
      "Provided ongoing maintenance and support",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: "#0a0e1a" }}>
      <div className="max-container">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 hidden sm:block"
            style={{ background: "linear-gradient(180deg, #3b82f6, #a855f7, #06b6d4)", transform: "translateX(-50%)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-accent-blue z-10 hidden sm:block"
                  style={{ background: "#0a0e1a", transform: "translate(-50%, 8px)", boxShadow: "0 0 12px #3b82f6" }}
                />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <p className="gradient-text font-semibold">{exp.company}</p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium shrink-0 ml-2"
                        style={{
                          background: exp.type === "Full-time"
                            ? "rgba(59,130,246,0.15)"
                            : exp.type === "Internship"
                            ? "rgba(168,85,247,0.15)"
                            : "rgba(6,182,212,0.15)",
                          color: exp.type === "Full-time" ? "#60a5fa"
                            : exp.type === "Internship" ? "#c084fc"
                            : "#22d3ee",
                          border: `1px solid ${exp.type === "Full-time" ? "#3b82f620" : exp.type === "Internship" ? "#a855f720" : "#06b6d420"}`
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <FiCalendar size={12} />
                      <span className="font-mono">{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-accent-blue mt-1 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty side for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
