import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Github, Mail, Send, Check, Code2 } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1500),
});

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joelkirubainathans" },
  { icon: Github, label: "GitHub", href: "https://github.com/Joelkirubainathan" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/JoelkirubainathanS/" },
  { icon: Mail, label: "Email", href: "mailto:joelkirubainathan@gmail.com" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:joelkirubainathan@gmail.com?subject=${encodeURIComponent(
      "Portfolio Contact",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const field = (name: keyof typeof form, label: string, type = "text") => (
    <div>
      <label className="block text-xs font-mono text-cyber-muted tracking-widest mb-2">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder:text-cyber-muted/50 focus:outline-none focus:border-cyber focus:cyber-glow transition"
        placeholder={`Your ${label.toLowerCase()}`}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Get In Touch"
      subtitle="Let's connect and build something great together."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {field("name", "Name")}
            {field("email", "Email", "email")}
          </div>
          <div>
            <label className="block text-xs font-mono text-cyber-muted tracking-widest mb-2">
              MESSAGE
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder:text-cyber-muted/50 focus:outline-none focus:border-cyber focus:cyber-glow transition resize-none"
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-[#0A0F1C] transition hover:scale-[1.02] cyber-glow disabled:opacity-70"
            style={{ background: "var(--gradient-cyber)" }}
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Message Sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Let's Connect
            </h3>
            <p className="text-sm text-cyber-muted">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-3 hover:cyber-glow hover:border-cyber transition group"
            >
              <div className="rounded-lg bg-cyber-primary/10 p-2.5 group-hover:bg-cyber-primary/20 transition">
                <s.icon className="h-5 w-5 text-cyber-primary" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-cyber-muted tracking-widest">
                  CONNECT
                </div>
                <div className="text-sm text-white">{s.label}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
