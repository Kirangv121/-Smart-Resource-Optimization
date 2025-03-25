"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RiskAlerts } from "@/components/risk-alerts"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download, FileText } from "lucide-react"
import { RiskTrendsChart } from "@/components/risk-trends-chart"
import { Badge } from "@/components/ui/badge"

export function RisksPage() {
  const [activeTab, setActiveTab] = useState("alerts")

  const risksByProject = [
    {
      project: "Downtown Office Tower",
      risks: [
        {
          id: 1,
          risk: "Weather Delay",
          impact: "Schedule",
          severity: "Medium",
          probability: "High",
          status: "warning",
        },
        { id: 2, risk: "Budget Overrun", impact: "Cost", severity: "High", probability: "Medium", status: "critical" },
        {
          id: 3,
          risk: "Material Quality",
          impact: "Quality",
          severity: "Medium",
          probability: "Low",
          status: "normal",
        },
      ],
    },
    {
      project: "Riverside Apartments",
      risks: [
        {
          id: 4,
          risk: "Material Shortage",
          impact: "Schedule & Cost",
          severity: "High",
          probability: "Medium",
          status: "critical",
        },
        { id: 5, risk: "Permit Delays", impact: "Schedule", severity: "Medium", probability: "Low", status: "normal" },
      ],
    },
    {
      project: "Industrial Park Expansion",
      risks: [
        { id: 6, risk: "Permit Approval", impact: "Schedule", severity: "Low", probability: "Low", status: "normal" },
        {
          id: 7,
          risk: "Environmental Compliance",
          impact: "Legal & Schedule",
          severity: "High",
          probability: "Low",
          status: "warning",
        },
      ],
    },
    {
      project: "Community Center",
      risks: [
        {
          id: 8,
          risk: "Labor Shortage",
          impact: "Schedule & Cost",
          severity: "Medium",
          probability: "Medium",
          status: "warning",
        },
        {
          id: 9,
          risk: "Design Changes",
          impact: "Schedule & Cost",
          severity: "Medium",
          probability: "High",
          status: "critical",
        },
      ],
    },
    {
      project: "Highway Bridge Repair",
      risks: [
        {
          id: 10,
          risk: "Traffic Management",
          impact: "Safety & Schedule",
          severity: "High",
          probability: "Medium",
          status: "critical",
        },
        {
          id: 11,
          risk: "Structural Issues",
          impact: "Quality & Cost",
          severity: "High",
          probability: "Low",
          status: "warning",
        },
      ],
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "critical":
        return <Badge variant="destructive">🔴 Critical Risk</Badge>
      case "warning":
        return <Badge variant="warning">🟠 Moderate Risk</Badge>
      case "normal":
        return <Badge variant="success">🟢 Low Risk</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Risk Alerts</h1>
          <p className="text-muted-foreground">Monitor and manage project risks</p>
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
            Add Risk
          </Button>
        </div>
      </div>

      <Tabs defaultValue="alerts" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="alerts">Risk Alerts</TabsTrigger>
          <TabsTrigger value="byproject">Risks by Project</TabsTrigger>
          <TabsTrigger value="trends">Risk Trends</TabsTrigger>
          <TabsTrigger value="mitigation">Mitigation Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <RiskAlerts />
        </TabsContent>

        <TabsContent value="byproject" className="space-y-4">
          <div className="space-y-6">
            {risksByProject.map((projectRisks) => (
              <Card key={projectRisks.project}>
                <CardHeader>
                  <CardTitle>{projectRisks.project}</CardTitle>
                  <CardDescription>Risk assessment and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectRisks.risks.map((risk) => (
                      <div key={risk.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                        <div>
                          <div className="font-medium">{risk.risk}</div>
                          <div className="text-sm text-muted-foreground">Impact: {risk.impact}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Severity:</span> {risk.severity}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Probability:</span> {risk.probability}
                          </div>
                          {getStatusBadge(risk.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Trends Over Time</CardTitle>
              <CardDescription>Historical risk levels across all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <RiskTrendsChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mitigation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Mitigation Plans</CardTitle>
              <CardDescription>Strategies to address identified risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    risk: "Weather Delay",
                    project: "Downtown Office Tower",
                    plan: "Implement weather contingency days in schedule. Prepare temporary weather protection measures. Monitor weather forecasts daily.",
                    owner: "Project Manager",
                    status: "In Progress",
                  },
                  {
                    id: 2,
                    risk: "Material Shortage",
                    project: "Riverside Apartments",
                    plan: "Identify alternative suppliers. Pre-order critical materials. Maintain buffer stock for essential items.",
                    owner: "Procurement Manager",
                    status: "Completed",
                  },
                  {
                    id: 3,
                    risk: "Labor Shortage",
                    project: "Community Center",
                    plan: "Develop relationships with multiple subcontractors. Create flexible scheduling to optimize workforce. Consider overtime options.",
                    owner: "Site Supervisor",
                    status: "Not Started",
                  },
                  {
                    id: 4,
                    risk: "Budget Overrun",
                    project: "Downtown Office Tower",
                    plan: "Implement strict change order process. Weekly budget reviews. Value engineering options identified.",
                    owner: "Financial Controller",
                    status: "In Progress",
                  },
                  {
                    id: 5,
                    risk: "Traffic Management",
                    project: "Highway Bridge Repair",
                    plan: "Develop comprehensive traffic management plan. Coordinate with local authorities. Schedule major work during off-peak hours.",
                    owner: "Safety Manager",
                    status: "In Progress",
                  },
                ].map((plan) => (
                  <div key={plan.id} className="border-b pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-lg">{plan.risk}</div>
                      <Badge
                        variant={
                          plan.status === "Completed"
                            ? "success"
                            : plan.status === "In Progress"
                              ? "default"
                              : "outline"
                        }
                      >
                        {plan.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Project: {plan.project}</div>
                    <div className="text-sm mb-2">Owner: {plan.owner}</div>
                    <div className="text-sm bg-muted p-3 rounded-md">{plan.plan}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

