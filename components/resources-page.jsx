"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceMonitoring } from "@/components/resource-monitoring"
import { ResourceInventory } from "@/components/resource-inventory"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download, FileText } from "lucide-react"
import { ResourceAllocationChart } from "@/components/resource-allocation-chart"
import { useRouter } from "next/navigation"

export function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  const handleTabChange = (value) => {
    setActiveTab(value)

    // Navigate to the appropriate resource page based on tab selection
    if (value === "equipment") {
      router.push("/resources/equipment")
    } else if (value === "materials") {
      router.push("/resources/materials")
    } else if (value === "labor") {
      router.push("/resources/labor")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground">Monitor and manage construction resources</p>
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
            Request Resources
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="allocation">Resource Allocation</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="labor">Labor</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ResourceMonitoring />
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
              <CardDescription>Current inventory levels and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResourceInventory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Allocation by Project</CardTitle>
              <CardDescription>Distribution of resources across active projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ResourceAllocationChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipment" className="space-y-4">
          <div className="text-center p-8">
            <p className="text-lg text-muted-foreground">Redirecting to Equipment Management...</p>
          </div>
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <div className="text-center p-8">
            <p className="text-lg text-muted-foreground">Redirecting to Materials Management...</p>
          </div>
        </TabsContent>

        <TabsContent value="labor" className="space-y-4">
          <div className="text-center p-8">
            <p className="text-lg text-muted-foreground">Redirecting to Labor Management...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

