"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceChart } from "@/components/resource-chart"
import { ResourceInventory } from "@/components/resource-inventory"
import { CircleProgress } from "@/components/circle-progress"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function ResourceMonitoring() {
  const resourceAllocationData = [
    { name: "Equipment", value: 35 },
    { name: "Materials", value: 45 },
    { name: "Labor", value: 20 },
  ]

  const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Resource Allocation</CardTitle>
          <CardDescription>Current resource distribution across projects</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="equipment">
            <TabsList className="mb-4">
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="labor">Labor</TabsTrigger>
            </TabsList>
            <TabsContent value="equipment">
              <ResourceChart type="equipment" />
            </TabsContent>
            <TabsContent value="materials">
              <ResourceChart type="materials" />
            </TabsContent>
            <TabsContent value="labor">
              <ResourceChart type="labor" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Inventory Status</CardTitle>
          <CardDescription>Current inventory levels and alerts</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ResourceInventory />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Distribution</CardTitle>
          <CardDescription>Allocation by resource type</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceAllocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {resourceAllocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Resource Utilization</CardTitle>
          <CardDescription>Current utilization rates</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <CircleProgress value={85} label="Equipment" color="primary" />
              <p className="mt-2 text-sm font-medium">Equipment Utilization</p>
            </div>
            <div className="flex flex-col items-center">
              <CircleProgress value={72} label="Materials" color="secondary" />
              <p className="mt-2 text-sm font-medium">Materials Utilization</p>
            </div>
            <div className="flex flex-col items-center">
              <CircleProgress value={92} label="Labor" color="accent" />
              <p className="mt-2 text-sm font-medium">Labor Utilization</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Alerts</CardTitle>
          <CardDescription>Critical resource notifications</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Concrete Supply</p>
                <p className="text-sm text-muted-foreground">Downtown Office Tower</p>
              </div>
              <Badge variant="destructive">🔴 Low Stock</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Excavators</p>
                <p className="text-sm text-muted-foreground">Riverside Apartments</p>
              </div>
              <Badge variant="warning">🟠 Maintenance</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Skilled Labor</p>
                <p className="text-sm text-muted-foreground">Industrial Park</p>
              </div>
              <Badge variant="warning">🟠 Shortage</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Steel Beams</p>
                <p className="text-sm text-muted-foreground">Community Center</p>
              </div>
              <Badge variant="success">🟢 Delivered</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

