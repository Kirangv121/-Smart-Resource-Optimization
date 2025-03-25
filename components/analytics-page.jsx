"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Filter, Download, FileText } from "lucide-react"
import {
  Chart,
  ChartArea,
  ChartGrid,
  ChartLine,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"
import { ProductivityChart } from "@/components/productivity-chart"

export function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("performance")

  const performanceData = [
    {
      name: "Productivity",
      data: [
        { x: "Jan", y: 85 },
        { x: "Feb", y: 82 },
        { x: "Mar", y: 88 },
        { x: "Apr", y: 90 },
        { x: "May", y: 87 },
        { x: "Jun", y: 92 },
      ],
    },
    {
      name: "Efficiency",
      data: [
        { x: "Jan", y: 78 },
        { x: "Feb", y: 80 },
        { x: "Mar", y: 83 },
        { x: "Apr", y: 85 },
        { x: "May", y: 88 },
        { x: "Jun", y: 90 },
      ],
    },
    {
      name: "Safety Rating",
      data: [
        { x: "Jan", y: 92 },
        { x: "Feb", y: 94 },
        { x: "Mar", y: 91 },
        { x: "Apr", y: 95 },
        { x: "May", y: 96 },
        { x: "Jun", y: 97 },
      ],
    },
  ]

  const colors = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--success))"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Performance metrics and project analytics</p>
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
        </div>
      </div>

      <Tabs defaultValue="performance" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="quality">Quality Control</TabsTrigger>
          <TabsTrigger value="safety">Safety Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <Chart
                  height={350}
                  series={performanceData}
                  colors={colors}
                  margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
                >
                  <ChartGrid vertical horizontal />
                  <ChartXAxis dataKey="x" tickLine axisLine />
                  <ChartYAxis tickLine axisLine tickFormatter={(value) => `${value}%`} />
                  <ChartArea dataKey="y" />
                  <ChartLine dataKey="y" />
                  <ChartLegend />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </Chart>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Project Completion Rate</CardTitle>
                <CardDescription>Average completion vs timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold">92%</div>
                  <p className="text-sm text-muted-foreground">On-time completion rate</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>Efficiency of resource usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold">87%</div>
                  <p className="text-sm text-muted-foreground">Average utilization</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety Rating</CardTitle>
                <CardDescription>Overall safety performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold">96%</div>
                  <p className="text-sm text-muted-foreground">Safety compliance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="productivity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Productivity Analysis</CardTitle>
              <CardDescription>Productivity metrics by project and team</CardDescription>
            </CardHeader>
            <CardContent>
              <ProductivityChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quality Control Metrics</CardTitle>
              <CardDescription>Quality assurance and defect tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Project</th>
                      <th className="py-3 text-left font-medium">Inspections</th>
                      <th className="py-3 text-left font-medium">Pass Rate</th>
                      <th className="py-3 text-left font-medium">Defects</th>
                      <th className="py-3 text-left font-medium">Resolved</th>
                      <th className="py-3 text-left font-medium">Quality Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: 1,
                        project: "Downtown Office Tower",
                        inspections: 48,
                        passRate: "92%",
                        defects: 12,
                        resolved: 10,
                        score: "A",
                      },
                      {
                        id: 2,
                        project: "Riverside Apartments",
                        inspections: 36,
                        passRate: "88%",
                        defects: 15,
                        resolved: 11,
                        score: "B+",
                      },
                      {
                        id: 3,
                        project: "Industrial Park",
                        inspections: 42,
                        passRate: "95%",
                        defects: 8,
                        resolved: 8,
                        score: "A+",
                      },
                      {
                        id: 4,
                        project: "Community Center",
                        inspections: 24,
                        passRate: "87%",
                        defects: 10,
                        resolved: 7,
                        score: "B",
                      },
                      {
                        id: 5,
                        project: "Highway Bridge",
                        inspections: 30,
                        passRate: "90%",
                        defects: 9,
                        resolved: 8,
                        score: "A-",
                      },
                    ].map((project) => (
                      <tr key={project.id} className="border-b">
                        <td className="py-3 font-medium">{project.project}</td>
                        <td className="py-3">{project.inspections}</td>
                        <td className="py-3">{project.passRate}</td>
                        <td className="py-3">{project.defects}</td>
                        <td className="py-3">
                          {project.resolved} ({Math.round((project.resolved / project.defects) * 100)}%)
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              project.score.startsWith("A")
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : project.score.startsWith("B")
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {project.score}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Safety Performance</CardTitle>
              <CardDescription>Safety metrics and incident tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Safety Incidents by Project</h3>
                  <div className="space-y-4">
                    {[
                      { project: "Downtown Office Tower", incidents: 2, nearMisses: 5, lastIncident: "45 days ago" },
                      { project: "Riverside Apartments", incidents: 1, nearMisses: 3, lastIncident: "78 days ago" },
                      { project: "Industrial Park", incidents: 0, nearMisses: 2, lastIncident: "No incidents" },
                      { project: "Community Center", incidents: 1, nearMisses: 4, lastIncident: "32 days ago" },
                      { project: "Highway Bridge", incidents: 3, nearMisses: 7, lastIncident: "12 days ago" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                        <div>
                          <div className="font-medium">{item.project}</div>
                          <div className="text-sm text-muted-foreground">Last incident: {item.lastIncident}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm">
                            <span className="text-destructive font-medium">{item.incidents}</span> incidents
                          </div>
                          <div className="text-sm">
                            <span className="text-warning font-medium">{item.nearMisses}</span> near misses
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Safety Metrics</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Days Without Lost Time Incident</span>
                        <span className="font-bold text-success">32</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Recordable Incident Rate (TRIR)</span>
                        <span className="font-bold">1.2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Safety Training Compliance</span>
                        <span className="font-bold text-success">98%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Safety Inspection Completion</span>
                        <span className="font-bold text-success">100%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PPE Compliance Rate</span>
                        <span className="font-bold text-success">96%</span>
                      </div>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <h4 className="font-medium mb-2">Recent Safety Initiatives</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Weekly toolbox talks implemented across all sites</li>
                        <li>Enhanced fall protection training completed</li>
                        <li>New safety incentive program launched</li>
                        <li>Mobile safety reporting app deployed to all supervisors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

