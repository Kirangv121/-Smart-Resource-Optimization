"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CircleProgress } from "@/components/circle-progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import {
  LineChart,
  Line,
  Tooltip as LineTooltip,
  Legend as LineLegend,
  ResponsiveContainer as LineResponsiveContainer,
  CartesianGrid as LineCartesianGrid,
  XAxis as LineXAxis,
  YAxis as LineYAxis,
} from "recharts"

export function ProjectOverview() {
  const projects = [
    {
      id: 1,
      name: "Downtown Office Tower",
      progress: 68,
      status: "In Progress",
      dueDate: "Dec 15, 2025",
      budget: "$12.5M",
      spent: "$8.2M",
    },
    {
      id: 2,
      name: "Riverside Apartments",
      progress: 42,
      status: "In Progress",
      dueDate: "Mar 30, 2026",
      budget: "$8.7M",
      spent: "$3.6M",
    },
    {
      id: 3,
      name: "Industrial Park Expansion",
      progress: 91,
      status: "Final Phase",
      dueDate: "Aug 10, 2025",
      budget: "$5.2M",
      spent: "$4.8M",
    },
  ]

  const projectProgressData = [
    { name: "Downtown Office Tower", planned: 75, actual: 68 },
    { name: "Riverside Apartments", planned: 50, actual: 42 },
    { name: "Industrial Park", planned: 95, actual: 91 },
    { name: "Community Center", planned: 30, actual: 25 },
    { name: "Highway Bridge", planned: 20, actual: 15 },
  ]

  const milestoneData = [
    { name: "Jan", downtown: 5, riverside: 3, industrial: 4, community: 2, highway: 1 },
    { name: "Feb", downtown: 7, riverside: 4, industrial: 6, community: 3, highway: 2 },
    { name: "Mar", downtown: 10, riverside: 6, industrial: 8, community: 4, highway: 3 },
    { name: "Apr", downtown: 12, riverside: 8, industrial: 9, community: 5, highway: 4 },
    { name: "May", downtown: 15, riverside: 10, industrial: 10, community: 7, highway: 6 },
    { name: "Jun", downtown: 18, riverside: 12, industrial: 10, community: 9, highway: 8 },
  ]

  const getStatusBadge = (progress) => {
    if (progress > 80) return <Badge variant="success">🟢 On Track</Badge>
    if (progress > 40) return <Badge variant="default">🟠 Minor Delays</Badge>
    return <Badge variant="destructive">🔴 Critical Risks</Badge>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Project Timeline</CardTitle>
          <CardDescription>Timeline of all active projects</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={[
                  {
                    name: "Downtown Office Tower",
                    start: 0,
                    duration: 24,
                    current: 16,
                    completion: 68,
                  },
                  {
                    name: "Riverside Apartments",
                    start: 4,
                    duration: 20,
                    current: 8,
                    completion: 42,
                  },
                  {
                    name: "Industrial Park",
                    start: 8,
                    duration: 12,
                    current: 11,
                    completion: 91,
                  },
                  {
                    name: "Community Center",
                    start: 12,
                    duration: 18,
                    current: 4,
                    completion: 25,
                  },
                  {
                    name: "Highway Bridge",
                    start: 16,
                    duration: 10,
                    current: 1,
                    completion: 15,
                  },
                ]}
                margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  domain={[0, 30]}
                  tickCount={7}
                  tickFormatter={(value) => {
                    const date = new Date(2025, value, 1)
                    return date.toLocaleDateString("en-US", { month: "short", year: "2-digit" })
                  }}
                  label={{ value: "Project Duration (Months)", position: "bottom", offset: 0 }}
                />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "duration") {
                      return [`${value} months`, "Total Duration"]
                    }
                    if (name === "current") {
                      return [`${value} months`, "Current Progress"]
                    }
                    return [value, name]
                  }}
                  labelFormatter={(label) => `Project: ${label}`}
                />
                <Legend />
                <Bar dataKey="duration" name="Total Duration" fill="hsl(var(--muted))" radius={[0, 4, 4, 0]} />
                <Bar dataKey="current" name="Current Progress" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Project Milestones Completion</CardTitle>
          <CardDescription>Number of completed milestones per month</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 w-full">
            <LineResponsiveContainer width="100%" height="100%">
              <LineChart data={milestoneData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <LineCartesianGrid strokeDasharray="3 3" />
                <LineXAxis dataKey="name" />
                <LineYAxis label={{ value: "Completed Milestones", angle: -90, position: "insideLeft" }} />
                <LineTooltip />
                <LineLegend />
                <Line
                  type="monotone"
                  dataKey="downtown"
                  name="Downtown Office Tower"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="riverside"
                  name="Riverside Apartments"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="industrial"
                  name="Industrial Park"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="community"
                  name="Community Center"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="highway"
                  name="Highway Bridge"
                  stroke="hsl(var(--warning))"
                  strokeWidth={2}
                />
              </LineChart>
            </LineResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Project Progress Overview</CardTitle>
          <CardDescription>Planned vs. Actual Progress</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectProgressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Completion (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend />
                <Bar dataKey="planned" fill="hsl(var(--primary))" name="Planned Progress" />
                <Bar dataKey="actual" fill="hsl(var(--secondary))" name="Actual Progress" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>{project.name}</CardTitle>
              {getStatusBadge(project.progress)}
            </div>
            <CardDescription>Due: {project.dueDate}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <CircleProgress
                value={project.progress}
                label="Completion"
                color={project.progress > 80 ? "success" : project.progress > 40 ? "warning" : "destructive"}
              />
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">Budget</span>
                  <p className="text-sm font-medium">{project.budget}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">Spent</span>
                  <p className="text-sm font-medium">{project.spent}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

