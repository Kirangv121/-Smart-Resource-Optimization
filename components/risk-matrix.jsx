"use client"

import { useState } from "react"
import {
  Chart,
  ChartGrid,
  ChartScatter,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function RiskMatrix({ risks }) {
  const [activePoint, setActivePoint] = useState(null)

  // Transform risks data for the scatter plot
  const transformedData = risks.map((risk) => {
    // Map severity and probability to numeric values
    const severityMap = { low: 1, medium: 2, high: 3 }
    const probabilityMap = { low: 1, medium: 2, high: 3 }

    return {
      name: risk.risk,
      project: risk.project,
      description: risk.description,
      status: risk.status,
      x: severityMap[risk.severity],
      y: probabilityMap[risk.probability],
    }
  })

  // Define color based on risk status
  const getPointColor = (point) => {
    switch (point.status) {
      case "critical":
        return "hsl(var(--destructive))"
      case "warning":
        return "hsl(var(--warning))"
      case "normal":
        return "hsl(var(--success))"
      default:
        return "hsl(var(--primary))"
    }
  }

  return (
    <div className="w-full">
      <Chart height={300} data={transformedData} margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
        <ChartGrid vertical horizontal />
        <ChartXAxis
          dataKey="x"
          tickLine
          axisLine
          domain={[0, 4]}
          ticks={[1, 2, 3]}
          tickFormatter={(value) => {
            const labels = { 1: "Low", 2: "Medium", 3: "High" }
            return labels[value] || ""
          }}
          label={{ value: "Impact Severity", position: "bottom", offset: 20 }}
        />
        <ChartYAxis
          dataKey="y"
          tickLine
          axisLine
          domain={[0, 4]}
          ticks={[1, 2, 3]}
          tickFormatter={(value) => {
            const labels = { 1: "Low", 2: "Medium", 3: "High" }
            return labels[value] || ""
          }}
          label={{ value: "Probability", angle: -90, position: "left", offset: -25 }}
        />
        <ChartScatter
          dataKey="y"
          data={transformedData}
          fill={(point) => getPointColor(point)}
          size={20}
          onMouseEnter={(point) => setActivePoint(point)}
          onMouseLeave={() => setActivePoint(null)}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              content={({ payload }) => {
                if (payload && payload.length) {
                  const data = payload[0].payload
                  return (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{data.name}</p>
                      <p className="text-xs">{data.project}</p>
                      <p className="text-xs text-muted-foreground">{data.description}</p>
                    </div>
                  )
                }
                return null
              }}
            />
          }
        />
      </Chart>
    </div>
  )
}

