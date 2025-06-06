"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Tag, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
};

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Weeding Tracker",
    description:
      "Wedding Tracker is a comprehensive Windows-based application developed using C# and SQL Server to efficiently manage wedding planning tasks. It includes modules for guest management, event scheduling, budgeting, and vendor coordination — all designed to streamline the wedding planning process with a user-friendly interface.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["C#", "SQL Server"],
    category: "Windows Application Development",
    year: "2023",
    liveUrl: "#",
    githubUrl: "https://github.com/ouknhastev99/SystemWedding",
  },
  {
    id: 2,
    title: "Student Register",
    description:
      "Student Register is a web-based school management system built with ASP.NET Core MVC, SQL Server, and Entity Framework. It streamlines student enrollment, attendance tracking, and class management. The system features a responsive UI with Bootstrap, interactive components using jQuery, and efficient data handling via LINQ, providing administrators and teachers with an intuitive and reliable platform.",
    image:
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: [
      "ASP.NET CORE MVC",
      "SQL Server",
      "JQuery",
      "Boostrap",
      "LinQ",
      "EntiryFramework",
    ],
    category: "Web Development",
    year: "2021",
    liveUrl: "#",
    githubUrl: "https://github.com/NangDalet/SchoolManagement",
  },
  {
    id: 3,
    title: "Sale Inventory",
    description:
      "Sale Inventory is a Windows-based inventory and sales management system developed with C# and SQL Server. It provides real-time tracking of stock levels, sales transactions, and revenue insights. Designed for small to mid-sized businesses, the system includes features for inventory control, sales reporting, and customer management — delivering accurate data visualization for informed decision-making.",
    image:
      "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["C#", "SQL Server"],
    category: "Data Visualization",
    year: "2023",
    liveUrl: "#",
    githubUrl: "https://github.com/NangDalet/Sale_Inventory",
  },
  {
    id: 4,
    title: "Stock Management",
    description:
      "Stock Management is a responsive inventory tracking system built with Laravel and MySQL, designed to manage product stock levels, suppliers, and purchase records. Featuring a mobile-friendly interface enhanced with JavaScript, jQuery, and CSS, the application allows users to monitor inventory status in real time, generate reports, and streamline stock control operations for small to mid-sized businesses.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Laravel MySQL", "Javascrip", "CSS", "JQuery"],
    category: "Web Development",
    year: "2022",
    liveUrl: "#",
    githubUrl: "https://github.com/ouknhastev99/stock",
  },
  {
    id: 5,
    title: "School Management",
    description:
      "School Management is a full-stack web application built with Next.js, Spring Boot, and MySQL, designed to streamline academic and administrative tasks within educational institutions. The system supports features like student enrollment, teacher management, class scheduling, grading, and attendance tracking. With a clean, modern interface and robust backend, it enables efficient school operations and data-driven decision-making.",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Springboot", "MySql"],
    category: "AI & ML",
    year: "2025",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "VireakBuntham Booking System",
    description:
      "VireakBuntham Booking System is a web-based reservation platform developed using Spring Boot and MySQL, designed for managing bus ticket bookings. It features route selection, seat reservation, customer management, and real-time availability updates. The system streamlines the booking process for both customers and administrators, offering a reliable and efficient solution for intercity transportation services.",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Springboot API, MYSql"],
    category: "Web Development",
    year: "2023",
    liveUrl: "https://qavetwebbus.udaya-tech.com/",
    githubUrl: "#",
  },
];

// Extract unique categories
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my recent work across various domains, from web
                applications to mobile experiences.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="All" className="mb-12">
            <TabsList className="mx-auto flex justify-center flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs flex items-center gap-1"
                      >
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-1 text-sm font-medium transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-1 text-sm font-medium transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
