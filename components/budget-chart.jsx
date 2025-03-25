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

export function BudgetChart() {
  const data = [
    {
      name: "Downtown Office Tower",
      budget: 12500000,
      actual: 8200000,
    },
    {
      name: "Riverside Apartments",
      budget: 8700000,
      actual: 3600000,
    },
    {
      name: "Industrial Park",
      budget: 5200000,
      actual: 4800000,
    },
    {
      name: "Community Center",
      budget: 3800000,
      actual: 1200000,
    },
    {
      name: "Highway Bridge",
      budget: 7500000,
      actual: 2100000,
    },
  ]

  // Transform data for the chart
  const transformedData = data.flatMap((item) => [
    {
      key: "Budget",
      x: item.name,
      y: item.budget / 1000000, // Convert to millions
      raw: item.budget,
    },
    {
      key: "Actual",
      x: item.name,
      y: item.actual / 1000000, // Convert to millions
      raw: item.actual,
    },
  ])

  // Group data by project
  const series = [
    {
      name: "Budget",
      data: data.map((item) => ({
        x: item.name,
        y: item.budget / 1000000,
        raw: item.budget,
      })),
    },
    {
      name: "Actual",
      data: data.map((item) => ({
        x: item.name,
        y: item.actual / 1000000,
        raw: item.actual,
      })),
    },
  ]

  return (
    <div className="w-full">
      <Chart
        height={350}
        series={series}
        colors={["hsl(var(--primary))", "hsl(var(--secondary))"]}
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
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
        <ChartYAxis
          tickLine
          axisLine
          tickFormatter={(value) => `$${value}M`}
          label={{ value: "Amount (Millions $)", angle: -90, position: "left", offset: -40 }}
        />
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
                        {data.key}: ${data.raw.toLocaleString()}
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

