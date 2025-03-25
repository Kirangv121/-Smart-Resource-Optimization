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

export function ProductivityChart() {
  // Sample data for productivity by project
  const data = [
    {
      name: "Planned",
      data: [
        { x: "Downtown Office", y: 85 },
        { x: "Riverside Apts", y: 78 },
        { x: "Industrial Park", y: 92 },
        { x: "Community Center", y: 75 },
        { x: "Highway Bridge", y: 82 },
      ],
    },
    {
      name: "Actual",
      data: [
        { x: "Downtown Office", y: 82 },
        { x: "Riverside Apts", y: 75 },
        { x: "Industrial Park", y: 95 },
        { x: "Community Center", y: 68 },
        { x: "Highway Bridge", y: 78 },
      ],
    },
  ]

  const colors = ["hsl(var(--primary))", "hsl(var(--secondary))"]

  return (
    <div className="w-full">
      <Chart height={350} series={data} colors={colors} margin={{ top: 20, right: 20, bottom: 50, left: 60 }}>
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
          tickFormatter={(value) => `${value}%`}
          label={{ value: "Productivity Rate (%)", angle: -90, position: "left", offset: -40 }}
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
                        {data.name}: {data.y}%
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

