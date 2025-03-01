"use client"

import { useEffect, useRef,useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const [typedText, setTypedText] = useState("")
  const fullText = "Software Developer & Competitive Programmer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />

      <motion.div className="relative z-10 text-center" style={{ y: textY }}>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sahil Saw
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl mb-6 text-foreground/80 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3}}
        >
          {typedText}
          <span className="animate-blink">|</span>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="https://github.com/sahilsaw" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 interactive backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-primary/20"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/sahil-saw/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 interactive backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-primary/20"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </Link>
          <Link href="https://leetcode.com/sahilsaw" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 interactive backdrop-blur-sm bg-background/30 border-primary/20 hover:bg-primary/20"
            >
              <Code2 className="h-5 w-5" />
              LeetCode
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="mr-4 interactive bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
            >
              Get in Touch
            </Button>
          </Link>
          <Link href="#projects">
            <Button
              variant="secondary"
              size="lg"
              className="interactive backdrop-blur-sm bg-background/30 hover:bg-background/50"
            >
              View Projects
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Link href="#about" className="text-muted-foreground hover:text-primary interactive">
          <ChevronDown className="h-8 w-8" />
        </Link>
      </motion.div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary-rgb), 0.1) 0%, transparent 50%)",
          }}
        />
      </div>
    </section>
  )
}

