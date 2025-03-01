"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, ChevronDown } from "lucide-react"
import Link from "next/link"
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
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
    setIsMounted(true)

    // Only run on client-side
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color(0x5e8eff),
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add text mesh
    const fontLoader = new FontLoader()

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.y += 0.001

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      scene.remove(particlesMesh)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [])

  if (!isMounted) return null

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/50 to-background"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Sahil Saw
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
        <motion.div
          className="text-xl md:text-2xl mb-6 text-foreground/80 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3}}
        >
          {typedText}
          <span className="animate-blink">|</span>
        </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          </div>

          <div className="flex justify-center">
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
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Link href="#about" className="text-muted-foreground hover:text-primary interactive">
          <ChevronDown className="h-8 w-8" />
        </Link>
      </motion.div>
    </section>
  )
}

