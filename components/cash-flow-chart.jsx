"use client"

import {
  Chart,
  ChartArea,
  ChartBars,
  ChartGrid,
  ChartLine,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function CashFlowChart() {
  // Sample data for cash flow projection
  const data = [
    {
      name: "Income",
      data: [
        { x: "Jul", y: 1250000 },
        { x: "Aug", y: 980000 },
        { x: "Sep", y: 1100000 },
        { x: "Oct", y: 1300000 },
        { x: "Nov", y: 950000 },
        { x: "Dec", y: 850000 },
        { x: "Jan", y: 920000 },
        { x: "Feb", y: 1050000 },
        { x: "Mar", y: 1200000 },
        { x: "Apr", y: 1350000 },
        { x: "May", y: 1450000 },
        { x: "Jun", y: 1550000 },
      ],
    },
    {
      name: "Expenses",
      data: [
        { x: "Jul", y: 950000 },
        { x: "Aug", y: 880000 },
        { x: "Sep", y: 920000 },
        { x: "Oct", y: 1050000 },
        { x: "Nov", y: 890000 },
        { x: "Dec", y: 780000 },
        { x: "Jan", y: 850000 },
        { x: "Feb", y: 920000 },
        { x: "Mar", y: 980000 },
        { x: "Apr", y: 1100000 },
        { x: "May", y: 1200000 },
        { x: "Jun", y: 1300000 },
      ],
    },
    {
      name: "Net Cash Flow",
      data: [
        { x: "Jul", y: 300000 },
        { x: "Aug", y: 100000 },
        { x: "Sep", y: 180000 },
        { x: "Oct", y: 250000 },
        { x: "Nov", y: 60000 },
        { x: "Dec", y: 70000 },
        { x: "Jan", y: 70000 },
        { x: "Feb", y: 130000 },
        { x: "Mar", y: 220000 },
        { x: "Apr", y: 250000 },
        { x: "May", y: 250000 },
        { x: "Jun", y: 250000 },
      ],
    },
  ]

  const colors = ["hsl(var(--success))", "hsl(var(--destructive))", "hsl(var(--primary))"]

  return (
    <div className="w-full">
      <Chart height={400} series={data} colors={colors} margin={{ top: 20, right: 20, bottom: 30, left: 60 }}>
        <ChartGrid vertical horizontal />
        <ChartXAxis dataKey="x" tickLine axisLine />
        <ChartYAxis
          tickLine
          axisLine
          tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
          label={{ value: "Amount (Millions $)", angle: -90, position: "left", offset: -40 }}
        />
        <ChartBars dataKey="y" radius={4} name="Income" hide={true} />
        <ChartBars dataKey="y" radius={4} name="Expenses" hide={true} />
        <ChartArea dataKey="y" name="Income" />
        <ChartArea dataKey="y" name="Expenses" />
        <ChartLine dataKey="y" name="Net Cash Flow" strokeWidth={3} />
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
                        {data.name}: ${data.y.toLocaleString()}
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

