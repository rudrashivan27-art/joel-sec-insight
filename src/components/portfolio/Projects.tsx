import { useState } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Calendar, TrendingUp, Recycle } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Time Table Management System",
    icon: Calendar,
    category: "Web Development",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MYSQL"],
    features: ["User authentication", "Payment integration", "Admin dashboard"],
    github: "#",
    demo: "#",
  },
  {
    title: "Crypto Market Tracker",
    icon: TrendingUp,
    category: "Web Application",
    description:
      "A responsive weather application with real-time data, forecasts, and beautiful animations built with React and OpenWeather API.",
    tech: ["React", "CoinGecko API", "API Integration"],
    features: ["Real-time data", "Forecasts", "Responsive design"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Waste Management System",
    icon: Recycle,
    category: "Web Design",
    description:
      "A modern portfolio website with 3D animations, particle effects, and smooth transitions using Three.js and Framer Motion.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["3D animations", "Particle effects", "Smooth transitions"],
    github: "#",
    demo: "#",
  },
];

const filters = ["All", "Web Development", "Web Application", "Web Design"];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="My Projects"
      subtitle="Hands-on builds spanning web development, API integration, and creative design."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
              active === f
                ? "bg-cyber-primary text-[#0A0F1C] cyber-glow"
                : "glass text-cyber-muted hover:text-white"
            }`}
            style={
              active === f ? { background: "var(--gradient-cyber)" } : undefined
            }
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative glass rounded-2xl p-7 hover:cyber-glow hover:-translate-y-1 transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-lg bg-cyber-primary/10 p-3">
                <p.icon className="h-6 w-6 text-cyber-primary" />
              </div>
              <span className="font-mono text-[10px] text-cyber-muted tracking-widest">
                {p.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-cyber-primary transition">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-cyber-muted leading-relaxed">
              {p.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="text-xs text-cyber-muted flex items-start gap-2"
                >
                  <span className="text-cyber-primary mt-0.5">▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-cyber-primary border border-cyber-glass-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3 pt-4 border-t border-white/5">
              <a
                href={p.github}
                className="inline-flex items-center gap-1.5 text-xs text-cyber-muted hover:text-cyber-primary transition"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
              <a
                href={p.demo}
                className="inline-flex items-center gap-1.5 text-xs text-cyber-muted hover:text-cyber-primary transition"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
