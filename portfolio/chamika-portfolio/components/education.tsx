"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="education" ref={ref} className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My academic background and achievements</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            {/* University */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative md:ml-0 ml-6 md:mr-auto md:w-1/2 mb-12 md:pr-8"
            >
              <div className="absolute -left-6 md:-right-6 md:left-auto top-0 w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-purple-500">
                <GraduationCap className="text-purple-400 w-6 h-6" />
              </div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg shadow-xl ml-6 md:ml-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm text-gray-400">2020 - 2024 (Expected)</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">University of Ruhuna</h3>
                  <p className="text-gray-300 mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-400 text-sm">
                    Focusing on software engineering, data structures, algorithms, and web development.
                  </p>
                  <div className="mt-4 flex items-center">
                    <Award className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm text-gray-300">Dean's List: 3 Consecutive Semesters</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Education/Certification */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative md:ml-auto ml-6 md:w-1/2 mb-12 md:pl-8"
            >
              <div className="absolute -left-6 md:-left-6 top-0 w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-purple-500">
                <Award className="text-purple-400 w-6 h-6" />
              </div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg shadow-xl ml-6 md:ml-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm text-gray-400">2022</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Web Development Certification</h3>
                  <p className="text-gray-300 mb-2">Full Stack Web Development</p>
                  <p className="text-gray-400 text-sm">
                    Comprehensive training in modern web technologies including React, Node.js, and database management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
