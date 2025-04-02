"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts"

export function StatsGrid() {
  // Sample data for charts
  const weeklyData = [
    { name: "Mon", tasks: 5, xp: 120 },
    { name: "Tue", tasks: 7, xp: 180 },
    { name: "Wed", tasks: 4, xp: 100 },
    { name: "Thu", tasks: 8, xp: 200 },
    { name: "Fri", tasks: 6, xp: 150 },
    { name: "Sat", tasks: 3, xp: 80 },
    { name: "Sun", tasks: 2, xp: 50 },
  ]

  const monthlyData = [
    { name: "Week 1", tasks: 25, xp: 650 },
    { name: "Week 2", tasks: 32, xp: 800 },
    { name: "Week 3", tasks: 28, xp: 700 },
    { name: "Week 4", tasks: 35, xp: 880 },
  ]

  const categoryData = [
    { name: "Work", value: 45, color: "#3b82f6" },
    { name: "Health", value: 25, color: "#22c55e" },
    { name: "Learning", value: 20, color: "#a855f7" },
    { name: "Personal", value: 10, color: "#f97316" },
  ]

  const priorityData = [
    { name: "High", value: 30, color: "#ef4444" },
    { name: "Medium", value: 45, color: "#eab308" },
    { name: "Low", value: 25, color: "#22c55e" },
  ]

  const progressData = [
    { day: 1, xp: 120 },
    { day: 2, xp: 250 },
    { day: 3, xp: 380 },
    { day: 4, xp: 450 },
    { day: 5, xp: 600 },
    { day: 6, xp: 750 },
    { day: 7, xp: 880 },
    { day: 8, xp: 950 },
    { day: 9, xp: 1100 },
    { day: 10, xp: 1250 },
    { day: 11, xp: 1400 },
    { day: 12, xp: 1550 },
    { day: 13, xp: 1700 },
    { day: 14, xp: 1900 },
    { day: 15, xp: 2100 },
    { day: 16, xp: 2250 },
    { day: 17, xp: 2350 },
    { day: 18, xp: 2450 },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="weekly">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Task Completion</h3>
          <TabsList>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="weekly" className="mt-4">
          <Card className="dark:hover-glow-purple hover-glow-blue">
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="tasks" name="Tasks Completed" fill="hsl(var(--primary))" />
                  <Bar dataKey="xp" name="XP Earned" fill="hsl(var(--muted-foreground))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="mt-4">
          <Card className="dark:hover-glow-purple hover-glow-blue">
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="tasks" name="Tasks Completed" fill="hsl(var(--primary))" />
                  <Bar dataKey="xp" name="XP Earned" fill="hsl(var(--muted-foreground))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader>
            <CardTitle>Tasks by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="dark:hover-glow-purple hover-glow-blue">
          <CardHeader>
            <CardTitle>Tasks by Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={priorityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {priorityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="dark:hover-glow-purple hover-glow-blue">
        <CardHeader>
          <CardTitle>XP Progress Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: "Days", position: "insideBottomRight", offset: -5 }} />
              <YAxis label={{ value: "XP", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="xp"
                name="Total XP"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

