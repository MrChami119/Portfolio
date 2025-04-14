"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, Calendar, MapPin } from "lucide-react"

export default function Internship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="internship" ref={ref} className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Internship Opportunity
            </h2>
            <p className="text-gray-400">Currently seeking a Software Engineering Internship</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-black/60 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Software Engineering Intern</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Available: Immediately</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Location: Remote / On-site</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-center">
                I am currently open to a Software Engineering Internship opportunity. With a strong foundation in
                computer science principles and practical programming skills, I am eager to contribute to a dynamic team
                while further developing my technical abilities.
              </p>
              <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
