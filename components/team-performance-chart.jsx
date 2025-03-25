"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function TeamPerformanceChart() {
  // Sample data for team performance
  const data = [
    { name: "John D.", productivity: 92, quality: 95, safety: 98 },
    { name: "Jane S.", productivity: 88, quality: 92, safety: 96 },
    { name: "Robert J.", productivity: 85, quality: 88, safety: 95 },
    { name: "Emily D.", productivity: 90, quality: 94, safety: 97 },
    { name: "Michael W.", productivity: 82, quality: 90, safety: 99 },
    { name: "Sarah B.", productivity: 87, quality: 89, safety: 96 },
  ]

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} label={{ value: "Score (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend />
          <Bar dataKey="productivity" name="Productivity" fill="hsl(var(--primary))" />
          <Bar dataKey="quality" name="Quality" fill="hsl(var(--secondary))" />
          <Bar dataKey="safety" name="Safety Compliance" fill="hsl(var(--success))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

