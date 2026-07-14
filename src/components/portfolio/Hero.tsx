import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Mail, Terminal, Lock, Wifi, Cpu } from "lucide-react";

const ROLES = [
  "Web Developer",
  "UI/UX Designer",
  "Python Programmer",
  "Problem Solver",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[i % ROLES.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((p) => p + 1);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, i]);

  return (
    <span className="cyber-gradient-text font-mono">
      {text}
      <span className="animate-blink text-cyber-primary">|</span>
    </span>
  );
}

const floatingIcons = [
  { Icon: Lock, top: "10%", left: "8%", delay: 0 },
  { Icon: Wifi, top: "20%", right: "10%", delay: 0.5 },
  { Icon: Terminal, bottom: "25%", left: "12%", delay: 1 },
  { Icon: Cpu, bottom: "15%", right: "8%", delay: 1.5 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {floatingIcons.map(({ Icon, delay, ...pos }, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden md:block text-cyber-primary/20"
          style={pos as React.CSSProperties}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay }}
        >
          <Icon className="h-16 w-16" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-cyber-muted">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
        >
          JOEL KIRUBAINATHAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl h-8"
        >
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-8 max-w-2xl text-cyber-muted leading-relaxed"
        >
          Focused on professional growth and crafting innovative digital solutions.
          I enjoy building responsive web experiences, clean interfaces, and practical tools that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-[#0A0F1C] transition-all hover:scale-105 cyber-glow"
            style={{ background: "var(--gradient-cyber)" }}
          >
            <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md glass px-6 py-3 text-sm font-medium text-white hover:border-cyber transition-all hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="font-mono text-xs text-cyber-muted/60">
            <span className="text-cyber-primary">$</span> whoami → joelkirubainathan:~#
          </div>
        </motion.div>
      </div>
    </section>
  );
}
