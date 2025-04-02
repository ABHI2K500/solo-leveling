"use client"

import type React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Trophy, Calendar, Zap, Brain, Heart, Briefcase, BookOpen, Users, Clock, Target } from "lucide-react"

type Achievement = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  progress: number
  maxProgress: number
  completed: boolean
  xpReward: number
  category: "general" | "health" | "work" | "learning" | "social"
}

export function AchievementGrid() {
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "First Steps",
      description: "Complete your first 10 tasks",
      icon: <Zap className="h-6 w-6" />,
      progress: 10,
      maxProgress: 10,
      completed: true,
      xpReward: 100,
      category: "general",
    },
    {
      id: "2",
      title: "Consistency is Key",
      description: "Maintain a 7-day streak",
      icon: <Calendar className="h-6 w-6" />,
      progress: 12,
      maxProgress: 7,
      completed: true,
      xpReward: 150,
      category: "general",
    },
    {
      id: "3",
      title: "Task Master",
      description: "Complete 100 tasks",
      icon: <Target className="h-6 w-6" />,
      progress: 35,
      maxProgress: 100,
      completed: false,
      xpReward: 300,
      category: "general",
    },
    {
      id: "4",
      title: "Early Bird",
      description: "Complete 5 tasks before 9 AM",
      icon: <Clock className="h-6 w-6" />,
      progress: 5,
      maxProgress: 5,
      completed: true,
      xpReward: 100,
      category: "general",
    },
    {
      id: "5",
      title: "Fitness Enthusiast",
      description: "Complete 20 health-related tasks",
      icon: <Heart className="h-6 w-6" />,
      progress: 12,
      maxProgress: 20,
      completed: false,
      xpReward: 200,
      category: "health",
    },
    {
      id: "6",
      title: "Work Wizard",
      description: "Complete 30 work-related tasks",
      icon: <Briefcase className="h-6 w-6" />,
      progress: 18,
      maxProgress: 30,
      completed: false,
      xpReward: 250,
      category: "work",
    },
    {
      id: "7",
      title: "Knowledge Seeker",
      description: "Complete 25 learning-related tasks",
      icon: <BookOpen className="h-6 w-6" />,
      progress: 10,
      maxProgress: 25,
      completed: false,
      xpReward: 200,
      category: "learning",
    },
    {
      id: "8",
      title: "Social Butterfly",
      description: "Complete 15 social-related tasks",
      icon: <Users className="h-6 w-6" />,
      progress: 5,
      maxProgress: 15,
      completed: false,
      xpReward: 150,
      category: "social",
    },
    {
      id: "9",
      title: "Mind Master",
      description: "Complete 10 meditation tasks",
      icon: <Brain className="h-6 w-6" />,
      progress: 4,
      maxProgress: 10,
      completed: false,
      xpReward: 120,
      category: "health",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={cn(
              "transition-all duration-300",
              achievement.completed
                ? "bg-primary/10 dark:bg-primary/20 dark:glow-border-purple glow-border-blue"
                : "dark:hover-glow-purple hover-glow-blue",
            )}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div
                  className={cn(
                    "rounded-full p-2",
                    achievement.completed ? "bg-primary/20 dark:bg-primary/30" : "bg-muted",
                  )}
                >
                  {achievement.icon}
                </div>
                {achievement.completed && <Trophy className="h-5 w-5 text-primary" />}
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-1">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>
                    {achievement.progress}/{achievement.maxProgress}
                  </span>
                </div>
                <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
              </div>
              <div className="mt-3 text-xs font-medium text-primary">Reward: {achievement.xpReward} XP</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

