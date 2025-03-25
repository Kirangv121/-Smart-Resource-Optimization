"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectOverview } from "@/components/project-overview"
import { ResourceMonitoring } from "@/components/resource-monitoring"
import { RiskAlerts } from "@/components/risk-alerts"
import { FinancialReports } from "@/components/financial-reports"

export function DashboardContent() {
  const [activeTab, setActiveTab] = useState("overview")

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your construction projects in real-time</p>
      </div>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Project Overview</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="risks">Risk Alerts</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <ProjectOverview />
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
          <ResourceMonitoring />
        </TabsContent>
        <TabsContent value="risks" className="space-y-4">
          <RiskAlerts />
        </TabsContent>
        <TabsContent value="financial" className="space-y-4">
          <FinancialReports />
        </TabsContent>
      </Tabs>
    </div>
  )
}

