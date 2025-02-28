"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
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
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            My professional journey and contributions in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">
                        {exp.title} at {exp.company}
                      </CardTitle>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

