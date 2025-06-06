'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowDownCircle } from "lucide-react";


export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background layers... (unchanged) */}

      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Nang Dalet"
              width={170}
              height={170}
              className="rounded-full border-4 border-white shadow-lg mb-6"
            />
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">Nang Dalet</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           API Developer building efficient and scalable solutions to complex problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" onClick={scrollToContact}>
              Get in touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll down icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDownCircle className="h-10 w-10" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
}
