"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import Link from "next/link"
import ThreeBackground from "./three-background"
import { TypewriterEffect } from "./ui/typewriter-effect"

export default function Hero() {
  const words = [
    { text: "Undergraduate" },
    { text: "|" },
    { text: "Aspiring", className: "text-purple-400" },
    { text: "Software", className: "text-purple-400" },
    { text: "Engineer", className: "text-purple-400" },
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Chamika Gunarathne</h1>
          <div className="h-16 mb-8">
            <TypewriterEffect words={words} className="text-xl md:text-2xl" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
            <Link href="#contact">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                <Send className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-purple-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  )
}
