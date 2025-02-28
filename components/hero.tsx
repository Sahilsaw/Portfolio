"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-primary">Sahil Saw</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Software Developer & Competitive Programmer</p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="https://github.com/sahilsaw" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/sahil-saw/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </Link>
          <Link href="https://leetcode.com/sahilsaw" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Code2 className="h-5 w-5" />
              LeetCode
            </Button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link href="#contact">
            <Button size="lg" className="mr-4">
              Get in Touch
            </Button>
          </Link>
          <Link href="#projects">
            <Button variant="secondary" size="lg">
              View Projects
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-muted-foreground hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

