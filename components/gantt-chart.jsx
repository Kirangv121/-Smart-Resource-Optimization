"use client"

import { useState } from "react"
import {
  Chart,
  ChartBars,
  ChartGrid,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function GanttChart() {
  const [activeBar, setActiveBar] = useState(null)

  const projects = [
    { name: "Downtown Office Tower", start: 0, duration: 24, completion: 68 },
    { name: "Riverside Apartments", start: 4, duration: 20, completion: 42 },
    { name: "Industrial Park Expansion", start: 8, duration: 12, completion: 91 },
    { name: "Community Center", start: 12, duration: 18, completion: 25 },
    { name: "Highway Bridge Repair", start: 16, duration: 10, completion: 15 },
  ]

  const months = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(2025, 0, 1)
    date.setMonth(date.getMonth() + i)
    return date.toLocaleDateString("en-US", { month: "short", year: "2-digit" })
  })

  const data = projects.map((project, index) => ({
    name: project.name,
    data: Array.from({ length: 30 }, (_, i) => {
      if (i >= project.start && i < project.start + project.duration) {
        return { x: months[i], y: index + 1, completion: project.completion }
      }
      return { x: months[i], y: null }
    }).filter((item) => item.y !== null),
  }))

  const flatData = data.flatMap((series) => series.data)

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] p-4">
        <Chart height={300} data={flatData} margin={{ top: 20, right: 20, bottom: 30, left: 120 }}>
          <ChartGrid vertical horizontal />
          <ChartXAxis dataKey="x" tickLine axisLine />
          <ChartYAxis
            dataKey="y"
            type="number"
            domain={[0, projects.length + 1]}
            tickFormatter={(value) => {
              const project = projects[value - 1]
              return project ? project.name : ""
            }}
            tickLine
            axisLine
          />
          <ChartBars
            dataKey="y"
            barSize={20}
            onMouseEnter={(data) => setActiveBar(data)}
            onMouseLeave={() => setActiveBar(null)}
            radius={4}
            fill={(bar) => {
              const completion = bar.completion
              if (completion > 80) return "hsl(var(--success))"
              if (completion > 40) return "hsl(var(--warning))"
              return "hsl(var(--primary))"
            }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload
                    const project = projects[data.y - 1]
                    return (
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{project.name}</p>
                        <p className="text-xs text-muted-foreground">Completion: {project.completion}%</p>
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
    </div>
  )
}

