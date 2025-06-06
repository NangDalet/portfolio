// pages/index.js or app/page.js (depending on your Next.js routing setup)

import { ThemeToggle } from "@/components/theme-toggle";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
// import Testimonials from "@/components/sections/testimonials"; // Optional
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold">Portfolio</a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            {/* <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a> */}
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
