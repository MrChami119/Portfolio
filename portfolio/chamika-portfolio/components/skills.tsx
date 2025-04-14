"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Server, Cpu, Globe, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    title: "Frontend",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: ["Node.js", "Express", "Spring Boot", "Django", "RESTful APIs"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    title: "Tools & DevOps",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
  },
]

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
      <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg shadow-xl h-full">
        <div className="flex items-center mb-4">
          {category.icon}
          <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
        </div>
        <ul className="space-y-2">
          {category.skills.map((skill: string, idx: number) => {
            // Use a deterministic value based on the skill name
            const hash = skill.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
            const percentage = 70 + (hash % 30) // Between 70% and 99%

            return (
              <li key={idx} className="flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                    style={{
                      width: `${percentage}%`,
                      transition: "width 1s ease-in-out",
                    }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-300 w-24">{skill}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
