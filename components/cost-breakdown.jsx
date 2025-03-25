"use client"

import { Chart, ChartPie, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CostBreakdown() {
  const costData = [
    { name: "Materials", value: 42, amount: 14700000 },
    { name: "Labor", value: 28, amount: 9800000 },
    { name: "Equipment", value: 15, amount: 5250000 },
    { name: "Subcontractors", value: 10, amount: 3500000 },
    { name: "Permits & Fees", value: 3, amount: 1050000 },
    { name: "Overhead", value: 2, amount: 700000 },
  ]

  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
    "hsl(var(--destructive))",
    "hsl(var(--warning))",
    "hsl(var(--success))",
  ]

  const totalAmount = costData.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <Chart height={300} data={costData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} colors={colors}>
          <ChartPie
            dataKey="value"
            nameKey="name"
            innerRadius="60%"
            paddingAngle={2}
            cornerRadius={4}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend />
        </Chart>
      </div>

      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {costData.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-right">${item.amount.toLocaleString()}</TableCell>
                <TableCell className="text-right">{item.value}%</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="text-right font-bold">${totalAmount.toLocaleString()}</TableCell>
              <TableCell className="text-right font-bold">100%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

