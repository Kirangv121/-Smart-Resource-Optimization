"use client"

import {
  Chart,
  ChartArea,
  ChartGrid,
  ChartLine,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function RiskTrendsChart() {
  // Sample data for risk trends over time
  const data = [
    {
      name: "Critical Risks",
      data: [
        { x: "Jan", y: 5 },
        { x: "Feb", y: 7 },
        { x: "Mar", y: 8 },
        { x: "Apr", y: 6 },
        { x: "May", y: 4 },
        { x: "Jun", y: 3 },
      ],
    },
    {
      name: "Moderate Risks",
      data: [
        { x: "Jan", y: 12 },
        { x: "Feb", y: 10 },
        { x: "Mar", y: 14 },
        { x: "Apr", y: 15 },
        { x: "May", y: 11 },
        { x: "Jun", y: 9 },
      ],
    },
    {
      name: "Low Risks",
      data: [
        { x: "Jan", y: 8 },
        { x: "Feb", y: 9 },
        { x: "Mar", y: 7 },
        { x: "Apr", y: 10 },
        { x: "May", y: 12 },
        { x: "Jun", y: 15 },
      ],
    },
  ]

  const colors = ["hsl(var(--destructive))", "hsl(var(--warning))", "hsl(var(--success))"]

  return (
    <div className="w-full">
      <Chart height={350} series={data} colors={colors} margin={{ top: 20, right: 20, bottom: 30, left: 40 }}>
        <ChartGrid vertical horizontal />
        <ChartXAxis dataKey="x" tickLine axisLine />
        <ChartYAxis tickLine axisLine label={{ value: "Number of Risks", angle: -90, position: "left", offset: -20 }} />
        <ChartArea dataKey="y" />
        <ChartLine dataKey="y" />
        <ChartLegend />
        <ChartTooltip content={<ChartTooltipContent />} />
      </Chart>
    </div>
  )
}

