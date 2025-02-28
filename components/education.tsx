"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">My academic background and relevant coursework.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">B. Tech</CardTitle>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="font-medium">Noida Institute of Engineering and Technology</p>
                  <p className="text-sm text-muted-foreground">2022–2026</p>
                </div>
                <p className="text-sm text-muted-foreground">Greater Noida, UP | 7.11 GPA (up to 4th Sem)</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Relevant Coursework</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Data Structures, Algorithms, Computer Networks, Cloud Computing, Operating System, DBMS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-medium">The Complete 2024 Web Development Bootcamp</span>
                    <span className="text-sm text-muted-foreground">Dr. Angela Yu (Jun 2024)</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-medium">Object-Oriented Programming in Java</span>
                    <span className="text-sm text-muted-foreground">UC San Diego (Nov 2023)</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-medium">Human-Centered Design for Inclusive Innovation</span>
                    <span className="text-sm text-muted-foreground">University of Toronto (April 2023)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

