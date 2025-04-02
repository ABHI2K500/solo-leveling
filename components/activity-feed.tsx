"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCircle2, Trophy, Star, TrendingUp, Calendar, Clock } from "lucide-react"

type Activity = {
  id: string
  type: "task_completed" | "level_up" | "achievement" | "streak" | "reward"
  title: string
  description: string
  timestamp: string
  icon: React.ReactNode
  xp?: number
}

export function ActivityFeed() {
  const activities: Activity[] = [
    {
      id: "1",
      type: "task_completed",
      title: "Task Completed",
      description: 'Completed "Meditate for 10 minutes"',
      timestamp: "10 minutes ago",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      xp: 15,
    },
    {
      id: "2",
      type: "task_completed",
      title: "Task Completed",
      description: 'Completed "Call mom"',
      timestamp: "1 hour ago",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      xp: 10,
    },
    {
      id: "3",
      type: "level_up",
      title: "Level Up!",
      description: "You reached Level 7",
      timestamp: "2 hours ago",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      xp: 500,
    },
    {
      id: "4",
      type: "achievement",
      title: "Achievement Unlocked",
      description: "Early Bird: Complete 5 tasks before 9 AM",
      timestamp: "1 day ago",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      xp: 100,
    },
    {
      id: "5",
      type: "streak",
      title: "Streak Milestone",
      description: "You reached a 10-day streak!",
      timestamp: "2 days ago",
      icon: <Calendar className="h-5 w-5 text-orange-500" />,
      xp: 50,
    },
    {
      id: "6",
      type: "task_completed",
      title: "Task Completed",
      description: 'Completed "Weekly team meeting"',
      timestamp: "3 days ago",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      xp: 20,
    },
    {
      id: "7",
      type: "reward",
      title: "Reward Redeemed",
      description: 'Redeemed "Coffee Break" for 200 points',
      timestamp: "4 days ago",
      icon: <Star className="h-5 w-5 text-purple-500" />,
    },
    {
      id: "8",
      type: "achievement",
      title: "Achievement Unlocked",
      description: "Task Master: Complete 100 tasks",
      timestamp: "5 days ago",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      xp: 200,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative pl-14">
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-[18px] -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center",
                    "bg-background border-2 border-border",
                    activity.type === "level_up" ? "dark:glow-border-purple glow-border-blue" : "",
                  )}
                >
                  {activity.icon}
                </div>

                <div
                  className={cn(
                    "rounded-lg p-4 border",
                    activity.type === "level_up"
                      ? "bg-primary/10 dark:bg-primary/20 dark:glow-border-purple glow-border-blue"
                      : "",
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{activity.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.timestamp}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  {activity.xp && <div className="mt-2 text-xs font-medium text-primary">+{activity.xp} XP</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

