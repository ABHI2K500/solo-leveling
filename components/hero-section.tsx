"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BarChart3, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-full inline-block mb-4",
                "bg-primary/10 text-primary",
                "dark:bg-primary/20 dark:text-primary-foreground",
                "edge-light-container", // Replace glow with edge lighting
                "animated-edge-light", // Add animated edge lighting
              )}
            >
              Level Up Your Productivity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "text-4xl md:text-6xl font-bold tracking-tight mb-6",
              "text-edge-outline", // Replace glow with edge outline
            )}
            data-text="Transform Daily Tasks Into Epic Achievements"
          >
            Transform Daily Tasks Into <br />
            <span className="text-primary edge-light-text">Epic Achievements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl"
          >
            Solo Lvlng turns your everyday tasks into a game. Earn XP, level up, compete with others, and redeem rewards
            as you conquer your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/register">
              <Button
                size="lg"
                className={cn(
                  "edge-light relative overflow-hidden group",
                  "dark:hover-glow-purple hover-glow-blue",
                  "transition-all duration-300 hover:scale-105", // Add hover scale effect
                )}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 w-full h-full bg-white/10 glint-effect"></span>
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "dark:hover-glow-purple hover-glow-blue",
                  "transition-all duration-300 hover:scale-105", // Add hover scale effect
                )}
              >
                Explore Features
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            {[
              {
                icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
                title: "Complete Tasks",
                description: "Turn daily activities into rewarding quests",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: "Gain Experience",
                description: "Level up as you accomplish your goals",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Earn Rewards",
                description: "Redeem points for real-world benefits",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-lg p-6 transition-all duration-300",
                  "bg-card/50 hover:bg-card border",
                  "edge-light-container", // Replace glow with edge lighting
                  "hover:dark:hover-glow-purple hover:hover-glow-blue", // Only apply glow on hover
                )}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

