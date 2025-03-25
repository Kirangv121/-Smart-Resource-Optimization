"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function CarbonFootprintChart() {
  // Sample data for carbon footprint over time
  const data = [
    { month: "Jan", emissions: 180, industry: 190, target: 170 },
    { month: "Feb", emissions: 165, industry: 190, target: 165 },
    { month: "Mar", emissions: 175, industry: 190, target: 160 },
    { month: "Apr", emissions: 160, industry: 190, target: 155 },
    { month: "May", emissions: 155, industry: 190, target: 150 },
    { month: "Jun", emissions: 140, industry: 190, target: 145 },
  ]

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "CO₂ Emissions (tons)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`${value} tons`, ""]} />
          <Legend />
          <Line
            type="monotone"
            dataKey="emissions"
            name="Total Carbon Emissions"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="industry"
            name="Industry Average"
            stroke="hsl(var(--muted-foreground))"
            strokeDasharray="5 5"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="target"
            name="Target"
            stroke="hsl(var(--success))"
            strokeDasharray="3 3"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

