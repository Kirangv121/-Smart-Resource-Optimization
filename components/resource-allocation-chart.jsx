"use client"

import {
  Chart,
  ChartBars,
  ChartGrid,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function ResourceAllocationChart() {
  const projects = [
    "Downtown Office Tower",
    "Riverside Apartments",
    "Industrial Park",
    "Community Center",
    "Highway Bridge",
  ]

  // Transform data for the chart
  const data = [
    {
      name: "Equipment",
      data: projects.map((project, index) => ({
        x: project,
        y: Math.floor(Math.random() * 30) + 10,
      })),
    },
    {
      name: "Materials",
      data: projects.map((project, index) => ({
        x: project,
        y: Math.floor(Math.random() * 40) + 20,
      })),
    },
    {
      name: "Labor",
      data: projects.map((project, index) => ({
        x: project,
        y: Math.floor(Math.random() * 35) + 15,
      })),
    },
  ]

  return (
    <div className="w-full">
      <Chart
        height={400}
        series={data}
        colors={["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]}
        margin={{ top: 20, right: 20, bottom: 70, left: 60 }}
      >
        <ChartGrid vertical horizontal />
        <ChartXAxis
          dataKey="x"
          tickLine
          axisLine
          tickLabelProps={{
            angle: -45,
            textAnchor: "end",
            fontSize: 12,
          }}
        />
        <ChartYAxis tickLine axisLine label={{ value: "Resource Units", angle: -90, position: "left", offset: -40 }} />
        <ChartBars grouping="grouped" radius={4} />
        <ChartLegend />
        <ChartTooltip
          content={
            <ChartTooltipContent
              content={({ payload }) => {
                if (payload && payload.length) {
                  const data = payload[0].payload
                  return (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{data.x}</p>
                      <p className="text-xs">
                        {data.name}: {data.y} units
                      </p>
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

