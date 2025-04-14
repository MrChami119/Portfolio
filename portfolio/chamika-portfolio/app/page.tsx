import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Internship from "@/components/internship"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Internship />
      <Contact />
      <Footer />
    </main>
  )
}
