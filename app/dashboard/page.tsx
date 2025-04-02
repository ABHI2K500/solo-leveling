"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, CheckCircle2, Clock, Flame, Star, Trophy, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { TaskList } from "@/components/task-list"
import { StatsGrid } from "@/components/stats-grid"
import { ActivityFeed } from "@/components/activity-feed"
import { AchievementGrid } from "@/components/achievement-grid"

export default function DashboardPage() {
  const [currentLevel, setCurrentLevel] = useState(7)
  const [currentXP, setCurrentXP] = useState(350)
  const [maxXP, setMaxXP] = useState(500)
  const [streak, setStreak] = useState(12)

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Player! Track your progress and manage your tasks.</p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex items-center gap-2 px-3 py-1 rounded-full",
              "bg-primary/10 text-primary",
              "dark:bg-primary/20 dark:text-primary-foreground",
              "dark:glow-border-purple glow-border-blue",
            )}
          >
            <Flame className="h-4 w-4" />
            <span className="text-sm font-medium">{streak} Day Streak</span>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 px-3 py-1 rounded-full",
              "bg-primary/10 text-primary",
              "dark:bg-primary/20 dark:text-primary-foreground",
              "dark:glow-border-purple glow-border-blue",
            )}
          >
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">2,450 Total XP</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Level</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "flex items-center justify-center rounded-full w-12 h-12",
                  "bg-primary/10 text-primary",
                  "dark:bg-primary/20 dark:text-primary-foreground",
                )}
              >
                {currentLevel}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-xs">
                  <span>
                    XP: {currentXP}/{maxXP}
                  </span>
                  <span>{Math.round((currentXP / maxXP) * 100)}%</span>
                </div>
                <Progress value={(currentXP / maxXP) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/30</div>
            <p className="text-xs text-muted-foreground">+5 compared to last week</p>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#42</div>
            <p className="text-xs text-muted-foreground">Top 15% of all players</p>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Points</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">Redeem in the rewards shop</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks" className="mb-8">
        <TabsList>
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>Tasks</span>
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Stats</span>
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Activity</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>Achievements</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tasks">
          <TaskList />
        </TabsContent>
        <TabsContent value="stats">
          <StatsGrid />
        </TabsContent>
        <TabsContent value="activity">
          <ActivityFeed />
        </TabsContent>
        <TabsContent value="achievements">
          <AchievementGrid />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Tasks scheduled for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Complete project proposal", date: "Tomorrow", category: "Work", xp: 50 },
                { title: "30 minute workout", date: "Tomorrow", category: "Health", xp: 30 },
                { title: "Read 20 pages", date: "Apr 4", category: "Learning", xp: 20 },
                { title: "Team meeting", date: "Apr 5", category: "Work", xp: 15 },
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-2 h-10 rounded-full",
                        task.category === "Work"
                          ? "bg-blue-500"
                          : task.category === "Health"
                            ? "bg-green-500"
                            : "bg-purple-500",
                      )}
                    />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{task.date}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "px-2 py-1 rounded text-xs font-medium",
                      "bg-primary/10 text-primary",
                      "dark:bg-primary/20 dark:text-primary-foreground",
                    )}
                  >
                    +{task.xp} XP
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>See how you compare to other players</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { rank: 1, name: "Alex Chen", level: 15, xp: 7850 },
                { rank: 2, name: "Maria Garcia", level: 14, xp: 7200 },
                { rank: 3, name: "John Smith", level: 12, xp: 6450 },
                { rank: 4, name: "Sarah Johnson", level: 11, xp: 5900 },
                { rank: 42, name: "You", level: 7, xp: 2450, isUser: true },
              ].map((player, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-lg",
                    player.isUser ? "bg-primary/10 dark:bg-primary/20 dark:glow-border-purple glow-border-blue" : "",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                        player.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      {player.rank}
                    </div>
                    <div>
                      <p className={cn("font-medium", player.isUser ? "text-primary" : "")}>{player.name}</p>
                      <p className="text-xs text-muted-foreground">Level {player.level}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{player.xp.toLocaleString()} XP</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

