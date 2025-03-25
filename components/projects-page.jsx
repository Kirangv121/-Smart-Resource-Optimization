"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download, FileText } from "lucide-react"
import { GanttChart } from "@/components/gantt-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("timeline")

  const projects = [
    {
      id: 1,
      name: "Downtown Office Tower",
      location: "123 Main St, Downtown",
      status: "In Progress",
      completion: 68,
      startDate: "Jan 15, 2025",
      endDate: "Dec 15, 2025",
      budget: "$12.5M",
      spent: "$8.2M",
      risk: "Medium",
    },
    {
      id: 2,
      name: "Riverside Apartments",
      location: "456 River Rd, Riverside",
      status: "In Progress",
      completion: 42,
      startDate: "Apr 10, 2025",
      endDate: "Mar 30, 2026",
      budget: "$8.7M",
      spent: "$3.6M",
      risk: "Low",
    },
    {
      id: 3,
      name: "Industrial Park Expansion",
      location: "789 Industry Way, Eastside",
      status: "Final Phase",
      completion: 91,
      startDate: "Nov 5, 2024",
      endDate: "Aug 10, 2025",
      budget: "$5.2M",
      spent: "$4.8M",
      risk: "Low",
    },
    {
      id: 4,
      name: "Community Center",
      location: "321 Community Ave, Westside",
      status: "Planning",
      completion: 25,
      startDate: "Jun 20, 2025",
      endDate: "Sep 15, 2026",
      budget: "$3.8M",
      spent: "$1.2M",
      risk: "High",
    },
    {
      id: 5,
      name: "Highway Bridge Repair",
      location: "Highway 101, North County",
      status: "Just Started",
      completion: 15,
      startDate: "May 5, 2025",
      endDate: "Nov 30, 2025",
      budget: "$7.5M",
      spent: "$2.1M",
      risk: "Medium",
    },
  ]

  const getStatusBadge = (completion) => {
    if (completion > 80) return <Badge variant="success">🟢 On Track</Badge>
    if (completion > 40) return <Badge variant="default">🟠 Minor Delays</Badge>
    return <Badge variant="destructive">🔴 Critical Risks</Badge>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and monitor all your construction projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Excel
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <Tabs defaultValue="timeline" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="cards">Project Cards</TabsTrigger>
          <TabsTrigger value="details">Detailed View</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
              <CardDescription>Gantt chart of all active projects</CardDescription>
            </CardHeader>
            <CardContent>
              <GanttChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    {getStatusBadge(project.completion)}
                  </div>
                  <CardDescription>{project.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Completion</span>
                        <span className="font-medium">
                          {project.completion}
                          {"%"}
                        </span>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Start Date</span>
                        <p className="text-sm">{project.startDate}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">End Date</span>
                        <p className="text-sm">{project.endDate}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Budget</span>
                        <p className="text-sm font-medium">{project.budget}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Spent</span>
                        <p className="text-sm font-medium">{project.spent}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Project View</CardTitle>
              <CardDescription>Comprehensive information about all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Project Name</th>
                      <th className="py-3 text-left font-medium">Location</th>
                      <th className="py-3 text-left font-medium">Status</th>
                      <th className="py-3 text-left font-medium">Completion</th>
                      <th className="py-3 text-left font-medium">Timeline</th>
                      <th className="py-3 text-left font-medium">Budget</th>
                      <th className="py-3 text-left font-medium">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id} className="border-b">
                        <td className="py-3 font-medium">{project.name}</td>
                        <td className="py-3">{project.location}</td>
                        <td className="py-3">{project.status}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Progress value={project.completion} className="h-2 w-16" />
                            <span>
                              {project.completion}
                              {"%"}
                            </span>
                          </div>
                        </td>
                        <td className="py-3">
                          {project.startDate} - {project.endDate}
                        </td>
                        <td className="py-3">
                          {project.budget} (
                          {Math.round(
                            (Number.parseInt(project.spent.replace(/[^\d.]/g, "")) /
                              Number.parseInt(project.budget.replace(/[^\d.]/g, ""))) *
                              100,
                          )}
                          {"%"} spent)
                        </td>
                        <td className="py-3">{project.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

