"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BudgetChart } from "@/components/budget-chart"
import { CostBreakdown } from "@/components/cost-breakdown"
import { Button } from "@/components/ui/button"
import { Download, FileText, Filter, RefreshCw } from "lucide-react"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts"
import { CircleProgress } from "@/components/circle-progress"

export function FinancialReports() {
  const [forecastData, setForecastData] = useState([
    { month: "Jul", income: 1250000, expenses: 950000, cashFlow: 300000 },
    { month: "Aug", income: 980000, expenses: 880000, cashFlow: 100000 },
    { month: "Sep", income: 1100000, expenses: 920000, cashFlow: 180000 },
    { month: "Oct", income: 1300000, expenses: 1050000, cashFlow: 250000 },
    { month: "Nov", income: 950000, expenses: 890000, cashFlow: 60000 },
    { month: "Dec", income: 850000, expenses: 780000, cashFlow: 70000 },
    { month: "Jan", income: 920000, expenses: 850000, cashFlow: 70000 },
    { month: "Feb", income: 1050000, expenses: 920000, cashFlow: 130000 },
    { month: "Mar", income: 1200000, expenses: 980000, cashFlow: 220000 },
    { month: "Apr", income: 1350000, expenses: 1100000, cashFlow: 250000 },
    { month: "May", income: 1450000, expenses: 1200000, cashFlow: 250000 },
    { month: "Jun", income: 1550000, expenses: 1300000, cashFlow: 250000 },
  ])

  const [budgetHealth, setBudgetHealth] = useState({
    overall: 78,
    onBudget: 65,
    underBudget: 20,
    overBudget: 15,
  })

  // Function to simulate data changes
  const refreshFinancialData = () => {
    // Update forecast data with slight variations
    const updatedForecast = forecastData.map((item) => ({
      ...item,
      income: item.income * (0.95 + Math.random() * 0.1),
      expenses: item.expenses * (0.95 + Math.random() * 0.1),
      cashFlow: item.income * (0.95 + Math.random() * 0.1) - item.expenses * (0.95 + Math.random() * 0.1),
    }))

    setForecastData(updatedForecast)

    // Update budget health
    setBudgetHealth({
      overall: Math.floor(70 + Math.random() * 15),
      onBudget: Math.floor(60 + Math.random() * 15),
      underBudget: Math.floor(15 + Math.random() * 10),
      overBudget: Math.floor(10 + Math.random() * 10),
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Financial Reports</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={refreshFinancialData}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Excel
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Health</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <CircleProgress value={budgetHealth.overall} size={100} color="primary" />
              <p className="mt-2 text-xs text-muted-foreground">Overall Budget Health</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Projects On Budget</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <CircleProgress value={budgetHealth.onBudget} size={100} color="success" />
              <p className="mt-2 text-xs text-muted-foreground">
                {budgetHealth.onBudget}
                {"%"} of projects on budget
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Under Budget</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <CircleProgress value={budgetHealth.underBudget} size={100} color="secondary" />
              <p className="mt-2 text-xs text-muted-foreground">
                {budgetHealth.underBudget}
                {"%"} of projects under budget
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Over Budget</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <CircleProgress value={budgetHealth.overBudget} size={100} color="destructive" />
              <p className="mt-2 text-xs text-muted-foreground">
                {budgetHealth.overBudget}
                {"%"} of projects over budget
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="budget" className="space-y-4">
        <TabsList>
          <TabsTrigger value="budget">Budget vs. Actual</TabsTrigger>
          <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
          <TabsTrigger value="forecast">Financial Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Budget vs. Actual Spending</CardTitle>
              <CardDescription>Comparison of planned budget against actual expenditures</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <BudgetChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breakdown" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cost Breakdown by Category</CardTitle>
              <CardDescription>Detailed breakdown of project expenses by category</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <CostBreakdown />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Forecast</CardTitle>
              <CardDescription>Projected expenses and cash flow for the next 12 months</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis
                      tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                      label={{ value: "Amount (Millions $)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip
                      formatter={(value) => [`$${value.toLocaleString()}`, ""]}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="income"
                      name="Income"
                      stroke="hsl(var(--success))"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      name="Expenses"
                      stroke="hsl(var(--destructive))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="cashFlow"
                      name="Cash Flow"
                      stroke="hsl(var(--primary))"
                      strokeDasharray="5 5"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

