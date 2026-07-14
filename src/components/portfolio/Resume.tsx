import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { Section } from "./Section";

export function Resume() {
  return (
    <Section id="resume" eyebrow="RESUME" title="Resume">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl glass rounded-2xl p-8 md:p-12 text-center hover:cyber-glow transition-all"
      >
        <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-full bg-cyber-primary/10 p-4">
          <FileText className="h-10 w-10 text-cyber-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Download My Resume
        </h3>
        <p className="text-cyber-muted leading-relaxed max-w-xl mx-auto mb-8">
          Download my complete resume to learn more about my experience, skills, and achievements.
        </p>
        <a
          href="/resume.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-[#0A0F1C] transition-all hover:scale-105 cyber-glow"
          style={{ background: "var(--gradient-cyber)" }}
        >
          <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          Download Resume
        </a>
      </motion.div>
    </Section>
  );
}
