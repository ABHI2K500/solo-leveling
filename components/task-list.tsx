"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Calendar, Tag, Star, Filter, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Task = {
  id: string
  title: string
  completed: boolean
  category: string
  priority: "low" | "medium" | "high"
  dueDate?: string
  xpValue: number
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete project proposal",
      completed: false,
      category: "Work",
      priority: "high",
      dueDate: "2023-04-05",
      xpValue: 50,
    },
    {
      id: "2",
      title: "30 minute workout",
      completed: false,
      category: "Health",
      priority: "medium",
      dueDate: "2023-04-03",
      xpValue: 30,
    },
    {
      id: "3",
      title: "Read 20 pages",
      completed: false,
      category: "Learning",
      priority: "low",
      dueDate: "2023-04-04",
      xpValue: 20,
    },
    {
      id: "4",
      title: "Meditate for 10 minutes",
      completed: true,
      category: "Health",
      priority: "medium",
      xpValue: 15,
    },
    {
      id: "5",
      title: "Call mom",
      completed: true,
      category: "Personal",
      priority: "medium",
      xpValue: 10,
    },
  ])

  const [filter, setFilter] = useState("all")

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "completed") return task.completed
    if (filter === "pending") return !task.completed
    if (filter === "work") return task.category === "Work"
    if (filter === "health") return task.category === "Health"
    if (filter === "learning") return task.category === "Learning"
    if (filter === "personal") return task.category === "Personal"
    return true
  })

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))

    // Add a visual feedback for the user
    const task = tasks.find((t) => t.id === id)
    if (task && !task.completed) {
      // If completing a task, show a notification or feedback
      console.log(`Task "${task.title}" completed! Earned ${task.xpValue} XP`)
      // Here you would typically update the user's XP in a real application
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Work":
        return "bg-blue-500"
      case "Health":
        return "bg-green-500"
      case "Learning":
        return "bg-purple-500"
      case "Personal":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
            High
          </span>
        )
      case "medium":
        return (
          <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            Medium
          </span>
        )
      case "low":
        return (
          <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            Low
          </span>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>My Tasks</CardTitle>
            <CardDescription>Manage and track your daily tasks</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setFilter("all")}>All Tasks</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("pending")}>Pending</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("completed")}>Completed</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setFilter("work")}>Work</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("health")}>Health</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("learning")}>Learning</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("personal")}>Personal</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" className="flex items-center gap-2 dark:hover-glow-purple hover-glow-blue">
              <Plus className="h-4 w-4" />
              <span>Add Task</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No tasks found. Try changing your filter or add a new task.
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={cn(
                  "flex items-center justify-between p-4 rounded-lg border",
                  task.completed ? "bg-muted/50" : "",
                  "dark:hover-glow-purple hover-glow-blue",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn("w-1 h-12 rounded-full", getCategoryColor(task.category))} />
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                    className="dark:hover-glow-purple hover-glow-blue"
                    id={`task-${task.id}`} // Add an id for accessibility
                  />
                  <div>
                    <p className={cn("font-medium", task.completed ? "line-through text-muted-foreground" : "")}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>{task.category}</span>
                      </div>
                      {task.dueDate && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{task.dueDate}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>+{task.xpValue} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getPriorityLabel(task.priority)}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Reschedule</DropdownMenuItem>
                      <DropdownMenuItem>Change Category</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 border-t pt-6">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input placeholder="Add a new task..." className="flex-1" />
          <Select defaultValue="work">
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="learning">Learning</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full sm:w-auto dark:hover-glow-purple hover-glow-blue">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </CardFooter>
    </Card>
  )
}

