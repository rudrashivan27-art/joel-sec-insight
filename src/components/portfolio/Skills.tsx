import { motion } from "motion/react";
import { Code2, Database, Palette } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Development",
    icon: Code2,
    items: [
      ["React", 60],
      ["TypeScript", 65],
      ["Python", 90],
      ["HTML5", 90],
      ["CSS3", 85],
      ["Dart", 65],
    ] as [string, number][],
  },
  {
    title: "Database & Backend",
    icon: Database,
    items: [
      ["MY SQL", 80],
      ["MongoDB", 55],
      ["Node.js", 70],
    ] as [string, number][],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    items: [
      ["Figma", 95],
      ["Canva", 75],
      ["MS Office", 80],
    ] as [string, number][],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="SKILLS" title="My Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass rounded-2xl p-6 hover:cyber-glow transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg p-2.5 bg-cyber-primary/10">
                <g.icon className="h-5 w-5 text-cyber-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map(([name, pct]) => (
                <div key={name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-cyber-muted">{name}</span>
                    <span className="font-mono text-cyber-primary">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-cyber)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
