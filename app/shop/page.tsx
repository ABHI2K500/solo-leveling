"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star, Gift, ShoppingBag, Ticket, Zap, Filter } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

type Reward = {
  id: string
  title: string
  description: string
  points: number
  category: "digital" | "physical" | "experience"
  image: string
  popular?: boolean
  featured?: boolean
  stock?: number
  limited?: boolean
}

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [availablePoints, setAvailablePoints] = useState(1250)

  const rewards: Reward[] = [
    {
      id: "1",
      title: "Coffee Break",
      description: "Treat yourself to a coffee break. Redeem for a $5 gift card to your favorite coffee shop.",
      points: 200,
      category: "digital",
      image: "/placeholder.svg?height=200&width=200",
      popular: true,
    },
    {
      id: "2",
      title: "Movie Night",
      description: "Enjoy a movie night with a digital rental code for a new release film.",
      points: 350,
      category: "digital",
      image: "/placeholder.svg?height=200&width=200",
      popular: true,
      featured: true,
    },
    {
      id: "3",
      title: "Premium Theme",
      description: "Unlock a premium theme for your Solo Lvlng profile with unique animations and effects.",
      points: 150,
      category: "digital",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      title: "Productivity eBook",
      description: "Download a bestselling productivity eBook to enhance your skills.",
      points: 300,
      category: "digital",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "5",
      title: "Solo Lvlng T-Shirt",
      description: "Show off your productivity journey with a limited edition Solo Lvlng t-shirt.",
      points: 800,
      category: "physical",
      image: "/placeholder.svg?height=200&width=200",
      stock: 15,
      limited: true,
      featured: true,
    },
    {
      id: "6",
      title: "Sticker Pack",
      description: "A pack of 5 high-quality vinyl stickers featuring Solo Lvlng designs.",
      points: 250,
      category: "physical",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "7",
      title: "Productivity Workshop",
      description: "Access to an exclusive online productivity workshop with industry experts.",
      points: 1000,
      category: "experience",
      image: "/placeholder.svg?height=200&width=200",
      featured: true,
    },
    {
      id: "8",
      title: "Meditation Session",
      description: "A guided meditation session with a professional instructor.",
      points: 400,
      category: "experience",
      image: "/placeholder.svg?height=200&width=200",
      popular: true,
    },
    {
      id: "9",
      title: "XP Booster",
      description: "Double XP for all completed tasks for the next 24 hours.",
      points: 500,
      category: "digital",
      image: "/placeholder.svg?height=200&width=200",
      popular: true,
    },
  ]

  const filteredRewards = rewards.filter(
    (reward) =>
      reward.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reward.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedRewards = [...filteredRewards].sort((a, b) => {
    if (sortBy === "popular") {
      return (a.popular ? -1 : 1) - (b.popular ? -1 : 1)
    } else if (sortBy === "price-low") {
      return a.points - b.points
    } else if (sortBy === "price-high") {
      return b.points - a.points
    }
    return 0
  })

  const digitalRewards = sortedRewards.filter((reward) => reward.category === "digital")
  const physicalRewards = sortedRewards.filter((reward) => reward.category === "physical")
  const experienceRewards = sortedRewards.filter((reward) => reward.category === "experience")

  const handleRedeemReward = (reward: Reward) => {
    if (availablePoints >= reward.points) {
      setAvailablePoints(availablePoints - reward.points)

      // Add more detailed feedback
      console.log(`Successfully redeemed ${reward.title} for ${reward.points} points!`)

      // In a real application, you would call an API here
      // For now, just show a success message
      alert(`Successfully redeemed ${reward.title}!`)

      // If it's a limited stock item, you might want to update the stock
      if (reward.limited && reward.stock) {
        // Update the rewards array to reduce the stock by 1
        const updatedRewards = rewards.map((r) => (r.id === reward.id ? { ...r, stock: r.stock ? r.stock - 1 : 0 } : r))
        // In a real app, you would update the state or call an API
      }
    } else {
      alert("Not enough points to redeem this reward!")
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "digital":
        return <Zap className="h-5 w-5" />
      case "physical":
        return <Gift className="h-5 w-5" />
      case "experience":
        return <Ticket className="h-5 w-5" />
      default:
        return <Star className="h-5 w-5" />
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rewards Shop</h1>
          <p className="text-muted-foreground">Redeem your hard-earned points for exciting rewards.</p>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg",
            "bg-primary/10 text-primary",
            "dark:bg-primary/20 dark:text-primary-foreground",
            "dark:glow-border-purple glow-border-blue",
          )}
        >
          <Star className="h-5 w-5" />
          <span className="text-lg font-bold">{availablePoints} Points Available</span>
        </div>
      </div>

      {/* Featured Rewards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards
            .filter((reward) => reward.featured)
            .map((reward) => (
              <Card
                key={reward.id}
                className={cn("overflow-hidden transition-all duration-300", "dark:hover-glow-purple hover-glow-blue")}
              >
                <div className="relative h-48 w-full">
                  <img
                    src={reward.image || "/placeholder.svg"}
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <div
                      className={cn("px-2 py-1 rounded text-xs font-medium", "bg-primary/80 text-primary-foreground")}
                    >
                      Featured
                    </div>
                  </div>
                  {reward.limited && (
                    <div className="absolute top-2 left-2">
                      <div className={cn("px-2 py-1 rounded text-xs font-medium", "bg-red-500/80 text-white")}>
                        Limited Stock: {reward.stock}
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{reward.title}</CardTitle>
                    <div
                      className={cn(
                        "flex items-center gap-1 px-2 py-1 rounded",
                        "bg-primary/10 text-primary",
                        "dark:bg-primary/20 dark:text-primary-foreground",
                      )}
                    >
                      <Star className="h-4 w-4" />
                      <span className="font-bold">{reward.points}</span>
                    </div>
                  </div>
                  <CardDescription>
                    {getCategoryIcon(reward.category)}
                    <span className="ml-1 capitalize">{reward.category}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{reward.description}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full dark:hover-glow-purple hover-glow-blue"
                        onClick={() => setSelectedReward(reward)}
                        disabled={availablePoints < reward.points}
                      >
                        {availablePoints >= reward.points ? "Redeem Reward" : "Not Enough Points"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Redeem Reward</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to redeem this reward? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      {selectedReward && (
                        <div className="flex items-center gap-4 py-4">
                          <div className="w-16 h-16 rounded overflow-hidden">
                            <img
                              src={selectedReward.image || "/placeholder.svg"}
                              alt={selectedReward.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">{selectedReward.title}</h4>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="h-4 w-4 mr-1 text-primary" />
                              <span>{selectedReward.points} points</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setSelectedReward(null)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            if (selectedReward) {
                              handleRedeemReward(selectedReward)
                              setSelectedReward(null)
                            }
                          }}
                        >
                          Confirm Redemption
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search rewards..."
            className="pl-9 w-full md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* All Rewards */}
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>All Rewards</span>
          </TabsTrigger>
          <TabsTrigger value="digital" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Digital</span>
          </TabsTrigger>
          <TabsTrigger value="physical" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span>Physical</span>
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            <span>Experience</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedRewards.length === 0 ? (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No rewards found matching your search.
              </div>
            ) : (
              sortedRewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    "dark:hover-glow-purple hover-glow-blue",
                  )}
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-full h-full object-cover"
                    />
                    {reward.popular && (
                      <div className="absolute top-2 right-2">
                        <div
                          className={cn(
                            "px-2 py-1 rounded text-xs font-medium",
                            "bg-primary/80 text-primary-foreground",
                          )}
                        >
                          Popular
                        </div>
                      </div>
                    )}
                    {reward.limited && (
                      <div className="absolute top-2 left-2">
                        <div className={cn("px-2 py-1 rounded text-xs font-medium", "bg-red-500/80 text-white")}>
                          Limited: {reward.stock}
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{reward.title}</CardTitle>
                      <div
                        className={cn(
                          "flex items-center gap-1 px-2 py-1 rounded",
                          "bg-primary/10 text-primary",
                          "dark:bg-primary/20 dark:text-primary-foreground",
                        )}
                      >
                        <Star className="h-3 w-3" />
                        <span className="font-bold text-sm">{reward.points}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center text-xs">
                      {getCategoryIcon(reward.category)}
                      <span className="ml-1 capitalize">{reward.category}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground line-clamp-2">{reward.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full text-sm h-8 dark:hover-glow-purple hover-glow-blue"
                          onClick={() => setSelectedReward(reward)}
                          disabled={availablePoints < reward.points}
                        >
                          {availablePoints >= reward.points ? "Redeem" : "Not Enough Points"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Redeem Reward</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to redeem this reward? This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        {selectedReward && (
                          <div className="flex items-center gap-4 py-4">
                            <div className="w-16 h-16 rounded overflow-hidden">
                              <img
                                src={selectedReward.image || "/placeholder.svg"}
                                alt={selectedReward.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{selectedReward.title}</h4>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Star className="h-4 w-4 mr-1 text-primary" />
                                <span>{selectedReward.points} points</span>
                              </div>
                            </div>
                          </div>
                        )}
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setSelectedReward(null)}>
                            Cancel
                          </Button>
                          <Button
                            onClick={() => {
                              if (selectedReward) {
                                handleRedeemReward(selectedReward)
                                setSelectedReward(null)
                              }
                            }}
                          >
                            Confirm Redemption
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="digital">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {digitalRewards.length === 0 ? (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No digital rewards found matching your search.
              </div>
            ) : (
              digitalRewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    "dark:hover-glow-purple hover-glow-blue",
                  )}
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-full h-full object-cover"
                    />
                    {reward.popular && (
                      <div className="absolute top-2 right-2">
                        <div
                          className={cn(
                            "px-2 py-1 rounded text-xs font-medium",
                            "bg-primary/80 text-primary-foreground",
                          )}
                        >
                          Popular
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{reward.title}</CardTitle>
                      <div
                        className={cn(
                          "flex items-center gap-1 px-2 py-1 rounded",
                          "bg-primary/10 text-primary",
                          "dark:bg-primary/20 dark:text-primary-foreground",
                        )}
                      >
                        <Star className="h-3 w-3" />
                        <span className="font-bold text-sm">{reward.points}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center text-xs">
                      <Zap className="h-4 w-4" />
                      <span className="ml-1">Digital</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground line-clamp-2">{reward.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full text-sm h-8 dark:hover-glow-purple hover-glow-blue"
                      onClick={() => setSelectedReward(reward)}
                      disabled={availablePoints < reward.points}
                    >
                      {availablePoints >= reward.points ? "Redeem" : "Not Enough Points"}
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="physical">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {physicalRewards.length === 0 ? (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No physical rewards found matching your search.
              </div>
            ) : (
              physicalRewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    "dark:hover-glow-purple hover-glow-blue",
                  )}
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-full h-full object-cover"
                    />
                    {reward.limited && (
                      <div className="absolute top-2 left-2">
                        <div className={cn("px-2 py-1 rounded text-xs font-medium", "bg-red-500/80 text-white")}>
                          Limited: {reward.stock}
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{reward.title}</CardTitle>
                      <div
                        className={cn(
                          "flex items-center gap-1 px-2 py-1 rounded",
                          "bg-primary/10 text-primary",
                          "dark:bg-primary/20 dark:text-primary-foreground",
                        )}
                      >
                        <Star className="h-3 w-3" />
                        <span className="font-bold text-sm">{reward.points}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center text-xs">
                      <Gift className="h-4 w-4" />
                      <span className="ml-1">Physical</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground line-clamp-2">{reward.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full text-sm h-8 dark:hover-glow-purple hover-glow-blue"
                      onClick={() => setSelectedReward(reward)}
                      disabled={availablePoints < reward.points}
                    >
                      {availablePoints >= reward.points ? "Redeem" : "Not Enough Points"}
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="experience">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {experienceRewards.length === 0 ? (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No experience rewards found matching your search.
              </div>
            ) : (
              experienceRewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    "dark:hover-glow-purple hover-glow-blue",
                  )}
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={reward.image || "/placeholder.svg"}
                      alt={reward.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{reward.title}</CardTitle>
                      <div
                        className={cn(
                          "flex items-center gap-1 px-2 py-1 rounded",
                          "bg-primary/10 text-primary",
                          "dark:bg-primary/20 dark:text-primary-foreground",
                        )}
                      >
                        <Star className="h-3 w-3" />
                        <span className="font-bold text-sm">{reward.points}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center text-xs">
                      <Ticket className="h-4 w-4" />
                      <span className="ml-1">Experience</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground line-clamp-2">{reward.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full text-sm h-8 dark:hover-glow-purple hover-glow-blue"
                      onClick={() => setSelectedReward(reward)}
                      disabled={availablePoints < reward.points}
                    >
                      {availablePoints >= reward.points ? "Redeem" : "Not Enough Points"}
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

