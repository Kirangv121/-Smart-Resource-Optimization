"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download, FileText } from "lucide-react"
import { CircleProgress } from "@/components/circle-progress"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { equipmentData } from "@/components/equipment-data"

export function EquipmentPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [equipmentInventory] = useState(equipmentData.inventory)
  const [equipmentUtilizationData] = useState(equipmentData.utilization)
  const [equipmentStatusData] = useState(equipmentData.status)
  const [equipmentMaintenanceData] = useState(equipmentData.maintenance)
  const [equipmentAlerts] = useState(equipmentData.alerts)

  const COLORS = ["#4CAF50", "#FFC107", "#F44336", "#9E9E9E"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Equipment Management</h1>
          <p className="text-muted-foreground">Monitor and manage construction equipment</p>
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
            Add Equipment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="utilization">Utilization</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Equipment Status</CardTitle>
                <CardDescription>Current status of all equipment</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={equipmentStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {equipmentStatusData.map((entry, index) => (
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
                <CardTitle>Equipment Alerts</CardTitle>
                <CardDescription>Maintenance and issue alerts</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {equipmentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{alert.equipment}</p>
                        <p className="text-sm text-muted-foreground">{alert.location}</p>
                      </div>
                      <Badge variant={alert.severity}>{alert.message}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Overall Utilization</CardTitle>
                <CardDescription>Equipment utilization rate</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <CircleProgress value={72} size={150} label="Average Utilization" color="primary" />
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Target: 80%</p>
                  <p className="text-sm text-muted-foreground">Last Month: 68%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Equipment Utilization by Type</CardTitle>
              <CardDescription>Current utilization rates for different equipment types</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={equipmentUtilizationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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

        <TabsContent value="utilization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Utilization by Project</CardTitle>
              <CardDescription>How equipment is being utilized across projects</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { project: "Downtown Office", excavators: 85, cranes: 70, bulldozers: 60 },
                      { project: "Riverside Apts", excavators: 75, cranes: 80, bulldozers: 50 },
                      { project: "Industrial Park", excavators: 90, cranes: 65, bulldozers: 85 },
                      { project: "Community Center", excavators: 70, cranes: 60, bulldozers: 75 },
                      { project: "Highway Bridge", excavators: 95, cranes: 85, bulldozers: 55 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="project" />
                    <YAxis label={{ value: "Utilization (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, ""]} />
                    <Legend />
                    <Bar dataKey="excavators" name="Excavators" fill="hsl(var(--primary))" />
                    <Bar dataKey="cranes" name="Cranes" fill="hsl(var(--secondary))" />
                    <Bar dataKey="bulldozers" name="Bulldozers" fill="hsl(var(--accent))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance History</CardTitle>
              <CardDescription>Preventive vs. corrective maintenance</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={equipmentMaintenanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis label={{ value: "Number of Maintenance", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="preventive" name="Preventive Maintenance" fill="hsl(var(--success))" />
                    <Bar dataKey="corrective" name="Corrective Maintenance" fill="hsl(var(--destructive))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Inventory</CardTitle>
              <CardDescription>Current equipment inventory and status</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Equipment ID</th>
                      <th className="py-3 text-left font-medium">Type</th>
                      <th className="py-3 text-left font-medium">Model</th>
                      <th className="py-3 text-left font-medium">Location</th>
                      <th className="py-3 text-left font-medium">Status</th>
                      <th className="py-3 text-left font-medium">Last Maintenance</th>
                      <th className="py-3 text-left font-medium">Next Maintenance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipmentInventory.map((equipment) => (
                      <tr key={equipment.id} className="border-b">
                        <td className="py-3 font-medium">{equipment.id}</td>
                        <td className="py-3">{equipment.type}</td>
                        <td className="py-3">{equipment.model}</td>
                        <td className="py-3">{equipment.location}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              equipment.status === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : equipment.status === "Maintenance"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {equipment.status}
                          </span>
                        </td>
                        <td className="py-3">{equipment.lastMaintenance}</td>
                        <td className="py-3">{equipment.nextMaintenance}</td>
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

