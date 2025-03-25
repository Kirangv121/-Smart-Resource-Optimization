"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download, FileText } from "lucide-react"
import { CircleProgress } from "@/components/circle-progress"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  LineChart,
  Line,
} from "recharts"
import { materialsData } from "@/components/materials-data"

export function MaterialsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [materialsInventory] = useState(materialsData.inventory)
  const [materialsUsageData] = useState(materialsData.usage)
  const [materialsStatusData] = useState(materialsData.status)
  const [materialsCostData] = useState(materialsData.costs)
  const [materialsAlerts] = useState(materialsData.alerts)
  const [suppliers] = useState(materialsData.suppliers)

  const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Materials Management</h1>
          <p className="text-muted-foreground">Monitor and manage construction materials</p>
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
            Order Materials
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Material Status</CardTitle>
                <CardDescription>Current status of all materials</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={materialsStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {materialsStatusData.map((entry, index) => (
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
                <CardTitle>Material Alerts</CardTitle>
                <CardDescription>Inventory and order alerts</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {materialsAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{alert.material}</p>
                        <p className="text-sm text-muted-foreground">{alert.project}</p>
                      </div>
                      <Badge variant={alert.severity === "low" ? "destructive" : "warning"}>
                        {alert.severity === "low" ? "🔴 Low Stock" : "🟠 " + alert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Material Efficiency</CardTitle>
                <CardDescription>Material usage efficiency rate</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <CircleProgress value={78} size={150} label="Average Efficiency" color="primary" />
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Target: 85%</p>
                  <p className="text-sm text-muted-foreground">Last Month: 75%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Material Usage vs Target</CardTitle>
              <CardDescription>Current usage rates compared to targets</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={materialsUsageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                      label={{ value: "Usage Efficiency (%)", angle: -90, position: "insideLeft" }}
                      domain={[0, 100]}
                    />
                    <Tooltip formatter={(value) => [`${value}%`, ""]} />
                    <Legend />
                    <Bar dataKey="usage" name="Actual Usage" fill="hsl(var(--primary))" />
                    <Bar dataKey="target" name="Target Usage" fill="hsl(var(--muted))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Material Inventory</CardTitle>
              <CardDescription>Current inventory levels</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Material</th>
                      <th className="py-3 text-left font-medium">Quantity</th>
                      <th className="py-3 text-left font-medium">Unit</th>
                      <th className="py-3 text-left font-medium">Location</th>
                      <th className="py-3 text-left font-medium">Stock Level</th>
                      <th className="py-3 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialsInventory.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-3 font-medium">{item.name}</td>
                        <td className="py-3">
                          {item.quantity} {item.unit}
                        </td>
                        <td className="py-3">{item.unit}</td>
                        <td className="py-3">{item.location}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Progress value={item.level} className="h-2 w-24" />
                            <span className="text-xs">{item.level}%</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <Badge
                            variant={
                              item.status === "normal"
                                ? "success"
                                : item.status === "warning"
                                  ? "warning"
                                  : "destructive"
                            }
                          >
                            {item.status === "normal"
                              ? "🟢 In Stock"
                              : item.status === "warning"
                                ? "🟠 Low Stock"
                                : "🔴 Critical"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Material Cost Analysis</CardTitle>
              <CardDescription>Cost trends for major materials</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={materialsCostData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      label={{ value: "Cost ($)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip
                      formatter={(value) => [`$${value.toLocaleString()}`, ""]}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="concrete"
                      name="Concrete"
                      stroke="hsl(var(--primary))"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line type="monotone" dataKey="steel" name="Steel" stroke="hsl(var(--secondary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="lumber" name="Lumber" stroke="hsl(var(--accent))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Performance</CardTitle>
              <CardDescription>Supplier reliability and delivery metrics</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Supplier</th>
                      <th className="py-3 text-left font-medium">Materials</th>
                      <th className="py-3 text-left font-medium">On-Time Delivery</th>
                      <th className="py-3 text-left font-medium">Quality Rating</th>
                      <th className="py-3 text-left font-medium">Price Competitiveness</th>
                      <th className="py-3 text-left font-medium">Overall Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier) => (
                      <tr key={supplier.id} className="border-b">
                        <td className="py-3 font-medium">{supplier.name}</td>
                        <td className="py-3">{supplier.materials}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Progress value={supplier.delivery} className="h-2 w-16" />
                            <span>{supplier.delivery}%</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Progress value={supplier.quality} className="h-2 w-16" />
                            <span>{supplier.quality}%</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Progress value={supplier.price} className="h-2 w-16" />
                            <span>{supplier.price}%</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              supplier.rating.startsWith("A")
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : supplier.rating.startsWith("B")
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {supplier.rating}
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

