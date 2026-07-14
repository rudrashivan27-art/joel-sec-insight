import { createFileRoute } from "@tanstack/react-router";
import { CyberBackground } from "@/components/portfolio/CyberBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joel Kirubainathan | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Joel Kirubainathan — final-year student, developer, and designer focused on professional growth and innovative digital solutions.",
      },
      {
        name: "keywords",
        content:
          "Joel Kirubainathan, Portfolio, Web Developer, UI/UX Designer, React, Python, Figma",
      },
      { name: "author", content: "Joel Kirubainathan" },
      { property: "og:title", content: "Joel Kirubainathan | Portfolio" },
      {
        property: "og:description",
        content:
          "Final-year student, developer, and designer focused on professional growth and innovative digital solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Joel Kirubainathan | Portfolio" },
      {
        name: "twitter:description",
        content:
          "Final-year student, developer, and designer focused on professional growth and innovative digital solutions.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joel Kirubainathan",
          jobTitle: "Developer & Designer",
          description:
            "Final-year student passionate about technology and design",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh bg-cyber text-white">
      <CyberBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
