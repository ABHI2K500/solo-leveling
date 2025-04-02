"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            "rounded-2xl p-8 md:p-12 relative overflow-hidden",
            "bg-primary/10 border",
            "dark:bg-primary/20",
            "edge-light-container animated-edge-light", // Replace glow with edge lighting and add animation
          )}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-float" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4",
                "edge-light-text", // Replace glow with edge lighting
              )}
            >
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Join thousands of players who are transforming their lives one task at a time. Sign up today and begin
              your epic quest towards productivity and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className={cn("edge-light relative overflow-hidden group", "dark:hover-glow-purple hover-glow-blue")}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="dark:hover-glow-purple hover-glow-blue">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

