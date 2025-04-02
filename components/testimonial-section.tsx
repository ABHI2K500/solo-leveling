"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Developer",
      content:
        "Solo Lvlng has completely transformed how I approach my daily tasks. The gamification aspect makes even the most mundane activities exciting. I've increased my productivity by 40% since I started!",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      content:
        "I've tried many productivity apps, but Solo Lvlng is different. The competitive leaderboards keep me motivated, and the reward system actually makes me look forward to completing my tasks.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Fitness Instructor",
      content:
        "As someone who teaches others about discipline, I needed a tool that practiced what I preached. Solo Lvlng helps me stay accountable and track my progress in both professional and personal goals.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ]

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-full inline-block mb-4",
              "bg-primary/10 text-primary",
              "dark:bg-primary/20 dark:text-primary-foreground",
              "edge-light-container", // Replace glow with edge lighting
            )}
          >
            Success Stories
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              "edge-light-text", // Replace glow with edge lighting
            )}
          >
            What Our Players Are Saying
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of users who have transformed their productivity and achieved their goals with Solo Lvlng.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "rounded-lg p-6 h-full flex flex-col",
                "bg-card border",
                "edge-light-container", // Replace glow with edge lighting
                "hover:dark:hover-glow-purple hover:hover-glow-blue", // Only apply glow on hover
              )}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground",
                      )}
                    />
                  ))}
              </div>
              <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-2">Join over 10,000+ players already leveling up their lives</p>
          <div className="flex justify-center space-x-4">
            <div
              className={cn(
                "flex -space-x-4",
                "edge-light-container", // Replace glow with edge lighting
              )}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-background">
                  <Image src={`/placeholder.svg?height=40&width=40`} alt={`User ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

