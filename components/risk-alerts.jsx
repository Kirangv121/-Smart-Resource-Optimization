"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from "recharts"
import { Badge } from "@/components/ui/badge"

export function RiskAlerts() {
  const [activeRisks, setActiveRisks] = useState([
    {
      id: 1,
      project: "Downtown Office Tower",
      risk: "Weather Delay",
      impact: "Schedule",
      severity: "medium",
      probability: "high",
      status: "warning",
      description: "Forecasted heavy rain may delay concrete pouring by 3-5 days",
    },
    {
      id: 2,
      project: "Riverside Apartments",
      risk: "Material Shortage",
      impact: "Cost",
      severity: "high",
      probability: "medium",
      status: "critical",
      description: "Steel supplier reported potential delays due to supply chain issues",
    },
    {
      id: 3,
      project: "Industrial Park Expansion",
      risk: "Permit Approval",
      impact: "Schedule",
      severity: "low",
      probability: "low",
      status: "normal",
      description: "All permits are on track for approval within expected timeframe",
    },
    {
      id: 4,
      project: "Community Center",
      risk: "Labor Shortage",
      impact: "Schedule & Cost",
      severity: "medium",
      probability: "medium",
      status: "warning",
      description: "Skilled labor availability may be limited during peak construction period",
    },
  ])

  // Transform risks data for the scatter plot
  const transformedData = activeRisks.map((risk) => {
    // Map severity and probability to numeric values
    const severityMap = { low: 1, medium: 2, high: 3 }
    const probabilityMap = { low: 1, medium: 2, high: 3 }
    const statusMap = { normal: 1, warning: 2, critical: 3 }

    return {
      name: risk.risk,
      project: risk.project,
      description: risk.description,
      status: risk.status,
      x: severityMap[risk.severity],
      y: probabilityMap[risk.probability],
      z: statusMap[risk.status],
    }
  })

  const getRiskIcon = (status) => {
    switch (status) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-destructive" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />
      case "normal":
        return <CheckCircle2 className="h-5 w-5 text-success" />
      default:
        return <AlertTriangle className="h-5 w-5" />
    }
  }

  const getRiskVariant = (status) => {
    switch (status) {
      case "critical":
        return "destructive"
      case "warning":
        return "warning"
      case "normal":
        return "success"
      default:
        return "default"
    }
  }

  const getRiskStatusText = (status) => {
    switch (status) {
      case "critical":
        return "🔴 Critical Risk"
      case "warning":
        return "🟠 Minor Delay"
      case "normal":
        return "🟢 On Track"
      default:
        return "Unknown"
    }
  }

  // Function to simulate risk status changes
  const simulateRiskChanges = () => {
    const updatedRisks = activeRisks.map((risk) => {
      // Randomly change some risk statuses
      if (Math.random() > 0.7) {
        const statuses = ["normal", "warning", "critical"]
        const newStatusIndex = Math.floor(Math.random() * 3)
        return { ...risk, status: statuses[newStatusIndex] }
      }
      return risk
    })

    setActiveRisks(updatedRisks)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Risk Matrix</CardTitle>
            <CardDescription>Probability vs. Impact assessment</CardDescription>
          </div>
          <Button variant="outline" onClick={simulateRiskChanges}>
            Refresh Risk Data
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Severity"
                  domain={[0, 4]}
                  tickCount={4}
                  tickFormatter={(value) => {
                    const labels = { 1: "Low", 2: "Medium", 3: "High" }
                    return labels[value] || ""
                  }}
                  label={{ value: "Impact Severity", position: "bottom", offset: 0 }}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Probability"
                  domain={[0, 4]}
                  tickCount={4}
                  tickFormatter={(value) => {
                    const labels = { 1: "Low", 2: "Medium", 3: "High" }
                    return labels[value] || ""
                  }}
                  label={{ value: "Probability", angle: -90, position: "left" }}
                />
                <ZAxis type="number" dataKey="z" range={[100, 500]} />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  formatter={(value, name) => {
                    if (name === "Severity") {
                      return [["Low", "Medium", "High"][value - 1], name]
                    }
                    if (name === "Probability") {
                      return [["Low", "Medium", "High"][value - 1], name]
                    }
                    return [value, name]
                  }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="rounded-md border bg-background p-2 shadow-md">
                          <p className="font-bold">{data.name}</p>
                          <p className="text-sm">{data.project}</p>
                          <p className="text-sm text-muted-foreground">{data.description}</p>
                          <p className="text-sm mt-1">{getRiskStatusText(data.status)}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Scatter
                  name="Risks"
                  data={transformedData}
                  fill={(entry) => {
                    switch (entry.status) {
                      case "critical":
                        return "hsl(var(--destructive))"
                      case "warning":
                        return "hsl(var(--warning))"
                      case "normal":
                        return "hsl(var(--success))"
                      default:
                        return "hsl(var(--primary))"
                    }
                  }}
                  fillOpacity={0.8}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-full space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Active Risk Alerts</h3>
          <Badge variant="outline" className="px-3">
            {activeRisks.filter((r) => r.status === "critical").length} Critical {"\u2022"}
            {activeRisks.filter((r) => r.status === "warning").length} Warning {"\u2022"}
            {activeRisks.filter((r) => r.status === "normal").length} Normal
          </Badge>
        </div>
        {activeRisks.map((risk) => (
          <Alert key={risk.id} variant={getRiskVariant(risk.status)}>
            <div className="flex items-start gap-4">
              {getRiskIcon(risk.status)}
              <div>
                <AlertTitle className="flex items-center gap-2">
                  {risk.risk}
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    {getRiskStatusText(risk.status)}
                  </span>
                </AlertTitle>
                <AlertDescription>
                  <div className="mt-1 text-sm">{risk.description}</div>
                  <div className="mt-2 flex gap-3 text-xs">
                    <span>Project: {risk.project}</span>
                    <span>Impact: {risk.impact}</span>
                    <span>Severity: {risk.severity}</span>
                    <span>Probability: {risk.probability}</span>
                  </div>
                </AlertDescription>
              </div>
            </div>
          </Alert>
        ))}
      </div>
    </div>
  )
}

