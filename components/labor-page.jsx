"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download, FileText } from "lucide-react"
import { CircleProgress } from "@/components/circle-progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { laborData } from "@/components/labor-data"

export function LaborPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [workforce] = useState(laborData.workforce)
  const [laborUtilizationData] = useState(laborData.utilization)
  const [laborDistributionData] = useState(laborData.distribution)
  const [laborProductivityData] = useState(laborData.productivity)
  const [laborAllocationData] = useState(laborData.allocation)
  const [laborAlerts] = useState(laborData.alerts)
  const [safetyData] = useState(laborData.safety)

  const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#9E9E9E"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Labor Management</h1>
          <p className="text-muted-foreground">Monitor and manage construction workforce</p>
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
            Add Worker
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Labor Distribution</CardTitle>
                <CardDescription>Workforce distribution by role</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={laborDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {laborDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Labor Alerts</CardTitle>
                <CardDescription>Staffing and safety alerts</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {laborAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{alert.type}</p>
                        <p className="text-sm text-muted-foreground">{alert.location}</p>
                      </div>
                      <Badge variant={alert.severity}>
                        {alert.icon} {alert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Overall Productivity</CardTitle>
                <CardDescription>Workforce productivity rate</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <CircleProgress value={88} size={150} label="Average Productivity" color="primary" />
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Target: 90%</p>
                  <p className="text-sm text-muted-foreground">Last Month: 85%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Labor Utilization by Role</CardTitle>
              <CardDescription>Current utilization rates for different worker types</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={laborUtilizationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: "Utilization (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, "Utilization"]} />
                    <Legend />
                    <Bar
                      dataKey="utilization"
                      name="Utilization Rate"
                      fill="hsl(var(--primary))"
                      background={{ fill: "hsl(var(--muted))" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="productivity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Productivity Trends</CardTitle>
              <CardDescription>Productivity metrics over time</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={laborProductivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                      label={{ value: "Productivity (%)", angle: -90, position: "insideLeft" }}
                      domain={[50, 100]}
                    />
                    <Tooltip formatter={(value) => [`${value}%`, ""]} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="productivity"
                      name="Actual Productivity"
                      stroke="hsl(var(--primary))"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      name="Target Productivity"
                      stroke="hsl(var(--muted-foreground))"
                      strokeDasharray="5 5"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Labor Allocation by Project</CardTitle>
              <CardDescription>How workforce is distributed across projects</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={laborAllocationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="project" />
                    <YAxis label={{ value: "Number of Workers", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="skilled" name="Skilled Workers" stackId="a" fill="hsl(var(--primary))" />
                    <Bar dataKey="general" name="General Labor" stackId="a" fill="hsl(var(--secondary))" />
                    <Bar dataKey="supervisors" name="Supervisors" stackId="a" fill="hsl(var(--accent))" />
                    <Bar dataKey="engineers" name="Engineers" stackId="a" fill="hsl(var(--muted))" />
                  </BarChart>
                </ResponsiveContainer>
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
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Safety Incidents by Project</h3>
                  <div className="space-y-4">
                    {safetyData.map((item, index) => (
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

          <Card>
            <CardHeader>
              <CardTitle>Worker Safety Certifications</CardTitle>
              <CardDescription>Safety training and certification status</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Worker</th>
                      <th className="py-3 text-left font-medium">Role</th>
                      <th className="py-3 text-left font-medium">OSHA Training</th>
                      <th className="py-3 text-left font-medium">First Aid</th>
                      <th className="py-3 text-left font-medium">Specialized Training</th>
                      <th className="py-3 text-left font-medium">Last Updated</th>
                      <th className="py-3 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workforce.map((worker) => (
                      <tr key={worker.id} className="border-b">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={worker.avatar} alt={worker.name} />
                              <AvatarFallback>{worker.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{worker.name}</span>
                          </div>
                        </td>
                        <td className="py-3">{worker.role}</td>
                        <td className="py-3">{worker.osha}</td>
                        <td className="py-3">{worker.firstAid}</td>
                        <td className="py-3">{worker.specialized}</td>
                        <td className="py-3">{worker.updated}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              worker.status === "Current"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : worker.status === "Renewal Required"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {worker.status}
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
      </Tabs>
    </div>
  )
}

