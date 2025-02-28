import Link from "next/link"
import { Github, Linkedin, Code2, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/sahilsaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sahil-saw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://leetcode.com/sahilsaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Code2 className="h-6 w-6" />
            <span className="sr-only">LeetCode</span>
          </Link>
          <Link
            href="mailto:sahilsaw23@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sahil Saw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

