"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const experiences = [
    {
      title: "R&D",
      company: "I-Educative (Fintech)",
      period: "Feb 2024 – July 2024",
      type: "Remote",
      responsibilities: [
        "Deployed a web app on AWS using CloudFront, EC2, and S3, reducing page load time by 30% and improving user retention.",
        "Built a PERN-based performance analyser, cutting debugging time by 40% through advanced issue tracking.",
        "Integrated Npcap and Fiddler to monitor network traffic, optimizing latency.",
      ],
    },
    {
      title: "UI/UX",
      company: "Davaivala (Startup)",
      period: "May 2023 – July 2023",
      type: "Remote",
      responsibilities: [
        "Designed UI/UX for the company's website and app using Figma, contributing to a ₹1 Crore investment.",
        "Collaborated with stakeholders to refine prototypes for investor pitches.",
      ],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      </div>

      <div className="container relative">
        <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              Work Experience
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              My professional journey and contributions in the tech industry.
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-12 relative ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-0" : "md:pl-12 md:ml-0 md:mr-auto"} md:w-1/2 w-full pl-10 md:pl-0`}
              >
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center z-10">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>

                {/* Timeline connector */}
                <div
                  className={`hidden md:block absolute top-4 ${index % 2 === 0 ? "right-0" : "left-0"} w-12 h-0.5 bg-gradient-to-r from-primary/80 to-primary/10`}
                ></div>

                <div className="backdrop-blur-md bg-background/30 border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        {exp.title} at {exp.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <Badge className="self-start md:self-center bg-primary/20 text-primary hover:bg-primary/30">
                      {exp.type}
                    </Badge>
                  </div>
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

