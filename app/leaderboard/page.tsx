"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trophy, Search, Users, Globe, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Player = {
  id: string
  name: string
  level: number
  xp: number
  rank: number
  avatar: string
  isUser?: boolean
  streak?: number
  tasksCompleted?: number
  achievements?: number
}

export default function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [timeFilter, setTimeFilter] = useState("all-time")

  const globalPlayers: Player[] = [
    { id: "1", name: "Alex Chen", level: 15, xp: 7850, rank: 1, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "2", name: "Maria Garcia", level: 14, xp: 7200, rank: 2, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "3", name: "John Smith", level: 12, xp: 6450, rank: 3, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "4", name: "Sarah Johnson", level: 11, xp: 5900, rank: 4, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "5", name: "David Lee", level: 10, xp: 5400, rank: 5, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "6", name: "Emma Wilson", level: 10, xp: 5250, rank: 6, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "7", name: "Michael Brown", level: 9, xp: 4800, rank: 7, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "8", name: "Sophia Martinez", level: 9, xp: 4600, rank: 8, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "9", name: "James Taylor", level: 8, xp: 4200, rank: 9, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "10", name: "Olivia Anderson", level: 8, xp: 4000, rank: 10, avatar: "/placeholder.svg?height=50&width=50" },
    {
      id: "42",
      name: "You",
      level: 7,
      xp: 2450,
      rank: 42,
      avatar: "/placeholder.svg?height=50&width=50",
      isUser: true,
      streak: 12,
      tasksCompleted: 145,
      achievements: 8,
    },
  ]

  const friendsPlayers: Player[] = [
    { id: "1", name: "Emma Wilson", level: 10, xp: 5250, rank: 1, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "2", name: "James Taylor", level: 8, xp: 4200, rank: 2, avatar: "/placeholder.svg?height=50&width=50" },
    {
      id: "3",
      name: "You",
      level: 7,
      xp: 2450,
      rank: 3,
      avatar: "/placeholder.svg?height=50&width=50",
      isUser: true,
      streak: 12,
      tasksCompleted: 145,
      achievements: 8,
    },
    { id: "4", name: "Michael Brown", level: 6, xp: 1950, rank: 4, avatar: "/placeholder.svg?height=50&width=50" },
    { id: "5", name: "Sophia Martinez", level: 5, xp: 1600, rank: 5, avatar: "/placeholder.svg?height=50&width=50" },
  ]

  const filteredGlobalPlayers = globalPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredFriendsPlayers = friendsPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank against other players and compete for the top spot.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex items-center justify-center rounded-full w-12 h-12 text-lg font-bold",
                  "bg-primary/10 text-primary",
                  "dark:bg-primary/20 dark:text-primary-foreground",
                )}
              >
                #{globalPlayers.find((p) => p.isUser)?.rank}
              </div>
              <div>
                <div className="text-2xl font-bold">Level {globalPlayers.find((p) => p.isUser)?.level}</div>
                <p className="text-xs text-muted-foreground">
                  {globalPlayers.find((p) => p.isUser)?.xp.toLocaleString()} XP total
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Player</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={globalPlayers[0].avatar || "/placeholder.svg"}
                    alt={globalPlayers[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Trophy className="absolute -bottom-1 -right-1 h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <div className="font-bold">{globalPlayers[0].name}</div>
                <p className="text-xs text-muted-foreground">
                  Level {globalPlayers[0].level} • {globalPlayers[0].xp.toLocaleString()} XP
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Your Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-2xl font-bold">{globalPlayers.find((p) => p.isUser)?.streak}</div>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
              <div>
                <div className="text-2xl font-bold">{globalPlayers.find((p) => p.isUser)?.tasksCompleted}</div>
                <p className="text-xs text-muted-foreground">Tasks Done</p>
              </div>
              <div>
                <div className="text-2xl font-bold">{globalPlayers.find((p) => p.isUser)?.achievements}</div>
                <p className="text-xs text-muted-foreground">Achievements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search players..."
            className="pl-9 w-full md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-time">All Time</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="global">
        <TabsList className="mb-6">
          <TabsTrigger value="global" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Global</span>
          </TabsTrigger>
          <TabsTrigger value="friends" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Friends</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <Card>
            <CardHeader>
              <CardTitle>Global Leaderboard</CardTitle>
              <CardDescription>
                {timeFilter === "all-time"
                  ? "All time rankings"
                  : timeFilter === "this-week"
                    ? "Rankings for this week"
                    : "Rankings for this month"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredGlobalPlayers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No players found matching your search.</div>
                ) : (
                  filteredGlobalPlayers.map((player) => (
                    <div
                      key={player.id}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-lg border",
                        player.isUser
                          ? "bg-primary/10 dark:bg-primary/20 dark:glow-border-purple glow-border-blue"
                          : "",
                        "dark:hover-glow-purple hover-glow-blue",
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold",
                            player.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                          )}
                        >
                          {player.rank}
                        </div>
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={player.avatar || "/placeholder.svg"}
                            alt={player.name}
                            className="w-full h-full object-cover"
                          />
                          {player.rank === 1 && (
                            <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-0.5">
                              <Trophy className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className={cn("font-medium", player.isUser ? "text-primary" : "")}>
                            {player.name} {player.isUser && "(You)"}
                          </p>
                          <p className="text-xs text-muted-foreground">Level {player.level}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{player.xp.toLocaleString()} XP</p>
                        {player.rank <= 3 && (
                          <div className="flex justify-end mt-1">
                            <div
                              className={cn(
                                "px-2 py-0.5 rounded text-xs font-medium",
                                player.rank === 1
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                  : player.rank === 2
                                    ? "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                                    : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
                              )}
                            >
                              {player.rank === 1 ? "Gold" : player.rank === 2 ? "Silver" : "Bronze"}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="friends">
          <Card>
            <CardHeader>
              <CardTitle>Friends Leaderboard</CardTitle>
              <CardDescription>See how you rank among your friends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFriendsPlayers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No friends found matching your search.</div>
                ) : (
                  filteredFriendsPlayers.map((player) => (
                    <div
                      key={player.id}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-lg border",
                        player.isUser
                          ? "bg-primary/10 dark:bg-primary/20 dark:glow-border-purple glow-border-blue"
                          : "",
                        "dark:hover-glow-purple hover-glow-blue",
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold",
                            player.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                          )}
                        >
                          {player.rank}
                        </div>
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={player.avatar || "/placeholder.svg"}
                            alt={player.name}
                            className="w-full h-full object-cover"
                          />
                          {player.rank === 1 && (
                            <div className="absolute -bottom-1 -right-1 bg-yellow-500 rounded-full p-0.5">
                              <Trophy className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className={cn("font-medium", player.isUser ? "text-primary" : "")}>
                            {player.name} {player.isUser && "(You)"}
                          </p>
                          <p className="text-xs text-muted-foreground">Level {player.level}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{player.xp.toLocaleString()} XP</p>
                        {player.rank <= 3 && (
                          <div className="flex justify-end mt-1">
                            <div
                              className={cn(
                                "px-2 py-0.5 rounded text-xs font-medium",
                                player.rank === 1
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                  : player.rank === 2
                                    ? "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                                    : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
                              )}
                            >
                              {player.rank === 1 ? "Gold" : player.rank === 2 ? "Silver" : "Bronze"}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

