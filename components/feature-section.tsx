"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CheckCircle, Trophy, ShoppingBag, BarChart, Users, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FeatureSection() {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Task Management",
      description: "Create, prioritize, and complete daily tasks to earn XP points and level up your character.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Leaderboards",
      description:
        "Compete with other players on global and friend leaderboards. Earn special rewards for top rankings.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Rewards Shop",
      description: "Exchange your hard-earned points for real rewards and benefits in our customizable shop.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Progress Tracking",
      description: "Visualize your growth with detailed statistics and progress charts to stay motivated.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Social Challenges",
      description: "Create or join challenges with friends to boost motivation and accountability.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Habit Building",
      description: "Transform one-time tasks into recurring habits to maximize your personal development.",
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
        staggerChildren: 0.1,
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
    <section id="features" className="py-20 bg-muted/50">
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
            Key Features
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              "edge-light-text", // Replace glow with edge lighting
            )}
          >
            Everything You Need To Level Up Your Life
          </h2>
          <p className="text-muted-foreground text-lg">
            Solo Lvlng provides all the tools you need to transform your daily routine into an exciting journey of
            growth and achievement.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "rounded-lg p-6 transition-all duration-300 h-full",
                "bg-card border",
                "edge-light-container", // Replace glow with edge lighting
                "hover:dark:hover-glow-purple hover:hover-glow-blue", // Only apply glow on hover
              )}
            >
              <div
                className={cn(
                  "rounded-full w-16 h-16 flex items-center justify-center mb-4",
                  "bg-primary/10",
                  "dark:bg-primary/20",
                )}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl" />
          <div className="relative rounded-xl overflow-hidden border p-8 md:p-12 edge-light-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className={cn(
                    "text-2xl md:text-3xl font-bold mb-4",
                    "edge-light-text", // Replace glow with edge lighting
                  )}
                >
                  Visualize Your Progress
                </h3>
                <p className="text-muted-foreground mb-6">
                  Track your journey with intuitive dashboards and detailed analytics. Watch your character level up as
                  you complete tasks and build consistent habits.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Daily and weekly progress summaries",
                    "Visual representation of skill development",
                    "Achievement milestones and badges",
                    "Personalized insights and recommendations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden border edge-light">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

