import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-sm">
          <Shield className="h-4 w-4 text-cyber-primary" />
          <span className="text-white">JOEL</span>
          <span className="text-cyber-primary">.KIRUBAINATHAN</span>
        </div>
        <p className="text-xs text-cyber-muted">
          © {2026} Joel Kirubainathan. All rights reserved.
        </p>
        <p className="text-[10px] font-mono text-cyber-muted/60">
          STATUS: <span className="text-green-400">SECURE</span>
        </p>
      </div>
    </footer>
  );
}
