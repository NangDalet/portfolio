"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Music, 
  Coffee 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               I'm an API Developer with a strong passion for building scalable, secure, and efficient backend systems. With a background in designing RESTful, I focus on creating robust communication layers that power modern web and mobile applications. I enjoy solving complex problems with clean code, documenting APIs clearly, and collaborating closely with frontend and mobile teams to deliver seamless user experiences.
Driven by curiosity and continuous learning, I'm always exploring new technologies and best practices in API design, performance optimization, and system integration.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
               I started my career in design, where I developed a strong sense of clarity, structure, and user-centered thinking. This foundation naturally guided me into backend development, where I found my passion for building APIs that connect and power modern applications.
              </p>
              <p className="text-muted-foreground mb-4">
                With 2 years of experience as an API Developer, I’ve contributed to creating scalable, secure, and well-documented APIs that serve both startups and growing businesses. My approach blends technical precision with an understanding of how APIs impact the overall user experience.
              </p>
              <p className="text-muted-foreground">
               From designing RESTful endpoints to integrating third-party services, I focus on building backend solutions that enable seamless communication and smooth performance across platforms.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">API Developer at UDaya Technology CO LTD</h4>
                    <p className="text-muted-foreground">2023- Present</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Specializing in Enterprise Application Development & API Integration using Spring Boot
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">FullStack Developer at Centric Kernel CO LTD</h4>
                    <p className="text-muted-foreground">May-2023 - Aug-2023</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Developed responsive web applications and improved UX/UI design systems
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">FullStack at Blue Technology CO LTD</h4>
                    <p className="text-muted-foreground">Dem-2022 - Fed-2023</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      University of Technology
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">When I'm Not Coding</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Heart className="h-6 w-6" />, title: "Volunteering", description: "Tech mentor for local youth" },
                { icon: <Music className="h-6 w-6" />, title: "Music", description: "Amateur guitarist & producer" },
                { icon: <Coffee className="h-6 w-6" />, title: "Coffee", description: "Aspiring home barista" },
                { icon: <GraduationCap className="h-6 w-6" />, title: "Learning", description: "Always exploring new tech" },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 rounded-full bg-secondary mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
