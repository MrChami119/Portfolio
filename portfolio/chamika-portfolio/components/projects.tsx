"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and admin dashboard",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Image Generator",
    description: "Web application that generates images using AI based on text prompts",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Mobile-responsive weather application with 7-day forecasts",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JavaScript", "Weather API", "HTML/CSS", "Chart.js"],
    github: "#",
    demo: "#",
  },
]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative bg-black/60 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, idx: number) => (
              <span key={idx} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" /> Code
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" /> Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={ref} className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my recent work and technical capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
