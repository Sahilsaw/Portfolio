"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            I'm a passionate software developer and competitive programmer with experience in full-stack development.
            Currently pursuing B.Tech at Noida Institute of Engineering and Technology, I specialize in building
            responsive web applications and solving complex algorithmic problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground text-center">+91 70049-43214</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-muted-foreground text-center">sahilsaw23@gmail.com</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-muted-foreground text-center">Greater Noida, UP, India</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

