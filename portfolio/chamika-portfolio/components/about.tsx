"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-black/60 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl">
              <p className="text-gray-300 mb-4 leading-relaxed">
                I am an undergraduate student at the University of Ruhuna, passionate about software engineering and
                technology. My academic journey has equipped me with a strong foundation in computer science principles
                and practical programming skills.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I am particularly interested in web development, artificial intelligence, and building scalable
                applications. My goal is to leverage technology to create innovative solutions that make a positive
                impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                continuously expanding my knowledge in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
