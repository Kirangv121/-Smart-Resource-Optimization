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

export function ResourceChart({ type }) {
  // Sample data for different resource types
  const data = {
    equipment: [
      {
        name: "Excavators",
        data: [
          { x: "Week 1", y: 5 },
          { x: "Week 2", y: 7 },
          { x: "Week 3", y: 10 },
          { x: "Week 4", y: 8 },
          { x: "Week 5", y: 12 },
          { x: "Week 6", y: 9 },
        ],
      },
      {
        name: "Cranes",
        data: [
          { x: "Week 1", y: 3 },
          { x: "Week 2", y: 4 },
          { x: "Week 3", y: 6 },
          { x: "Week 4", y: 8 },
          { x: "Week 5", y: 5 },
          { x: "Week 6", y: 7 },
        ],
      },
      {
        name: "Bulldozers",
        data: [
          { x: "Week 1", y: 8 },
          { x: "Week 2", y: 6 },
          { x: "Week 3", y: 4 },
          { x: "Week 4", y: 7 },
          { x: "Week 5", y: 9 },
          { x: "Week 6", y: 11 },
        ],
      },
    ],
    materials: [
      {
        name: "Concrete (tons)",
        data: [
          { x: "Week 1", y: 120 },
          { x: "Week 2", y: 180 },
          { x: "Week 3", y: 220 },
          { x: "Week 4", y: 150 },
          { x: "Week 5", y: 200 },
          { x: "Week 6", y: 170 },
        ],
      },
      {
        name: "Steel (tons)",
        data: [
          { x: "Week 1", y: 80 },
          { x: "Week 2", y: 100 },
          { x: "Week 3", y: 130 },
          { x: "Week 4", y: 90 },
          { x: "Week 5", y: 110 },
          { x: "Week 6", y: 140 },
        ],
      },
      {
        name: "Lumber (units)",
        data: [
          { x: "Week 1", y: 300 },
          { x: "Week 2", y: 250 },
          { x: "Week 3", y: 400 },
          { x: "Week 4", y: 350 },
          { x: "Week 5", y: 450 },
          { x: "Week 6", y: 380 },
        ],
      },
    ],
    labor: [
      {
        name: "Skilled Workers",
        data: [
          { x: "Week 1", y: 45 },
          { x: "Week 2", y: 52 },
          { x: "Week 3", y: 60 },
          { x: "Week 4", y: 58 },
          { x: "Week 5", y: 65 },
          { x: "Week 6", y: 70 },
        ],
      },
      {
        name: "General Labor",
        data: [
          { x: "Week 1", y: 80 },
          { x: "Week 2", y: 95 },
          { x: "Week 3", y: 110 },
          { x: "Week 4", y: 100 },
          { x: "Week 5", y: 120 },
          { x: "Week 6", y: 115 },
        ],
      },
      {
        name: "Supervisors",
        data: [
          { x: "Week 1", y: 12 },
          { x: "Week 2", y: 15 },
          { x: "Week 3", y: 15 },
          { x: "Week 4", y: 18 },
          { x: "Week 5", y: 20 },
          { x: "Week 6", y: 22 },
        ],
      },
    ],
  }

  const colors = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]

  return (
    <div className="w-full">
      <Chart height={350} series={data[type]} colors={colors} margin={{ top: 20, right: 20, bottom: 30, left: 40 }}>
        <ChartGrid vertical horizontal />
        <ChartXAxis dataKey="x" tickLine axisLine />
        <ChartYAxis tickLine axisLine />
        <ChartArea dataKey="y" />
        <ChartLine dataKey="y" />
        <ChartLegend />
        <ChartTooltip content={<ChartTooltipContent />} />
      </Chart>
    </div>
  )
}

