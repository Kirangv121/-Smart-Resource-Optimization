"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FinancialReports } from "@/components/financial-reports"
import { Button } from "@/components/ui/button"
import { Filter, Download, FileText, Plus } from "lucide-react"
import { CashFlowChart } from "@/components/cash-flow-chart"
import { ProjectFinancialTable } from "@/components/project-financial-table"

export function FinancialPage() {
  const [activeTab, setActiveTab] = useState("reports")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-muted-foreground">Track project finances and budgets</p>
        </div>
        <div className="flex gap-2">
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
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="reports" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="projectfinancials">Project Financials</TabsTrigger>
          <TabsTrigger value="invoices">Invoices & Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <FinancialReports />
        </TabsContent>

        <TabsContent value="cashflow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Projection</CardTitle>
              <CardDescription>12-month cash flow forecast for all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <CashFlowChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projectfinancials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Financial Summary</CardTitle>
              <CardDescription>Financial performance of all active projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectFinancialTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoices & Payments</CardTitle>
              <CardDescription>Track invoices, payments, and outstanding balances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Invoice #</th>
                      <th className="py-3 text-left font-medium">Project</th>
                      <th className="py-3 text-left font-medium">Vendor/Client</th>
                      <th className="py-3 text-left font-medium">Date</th>
                      <th className="py-3 text-left font-medium">Amount</th>
                      <th className="py-3 text-left font-medium">Due Date</th>
                      <th className="py-3 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "INV-2025-001",
                        project: "Downtown Office Tower",
                        entity: "Steel Suppliers Inc.",
                        date: "May 15, 2025",
                        amount: "$245,000",
                        dueDate: "Jun 15, 2025",
                        status: "Paid",
                      },
                      {
                        id: "INV-2025-002",
                        project: "Riverside Apartments",
                        entity: "Concrete Solutions LLC",
                        date: "May 18, 2025",
                        amount: "$178,500",
                        dueDate: "Jun 18, 2025",
                        status: "Pending",
                      },
                      {
                        id: "INV-2025-003",
                        project: "Industrial Park",
                        entity: "Heavy Equipment Rentals",
                        date: "May 20, 2025",
                        amount: "$86,750",
                        dueDate: "Jun 20, 2025",
                        status: "Overdue",
                      },
                      {
                        id: "INV-2025-004",
                        project: "Community Center",
                        entity: "Electrical Contractors Co.",
                        date: "May 22, 2025",
                        amount: "$124,300",
                        dueDate: "Jun 22, 2025",
                        status: "Pending",
                      },
                      {
                        id: "INV-2025-005",
                        project: "Highway Bridge",
                        entity: "Asphalt & Paving Ltd.",
                        date: "May 25, 2025",
                        amount: "$215,600",
                        dueDate: "Jun 25, 2025",
                        status: "Paid",
                      },
                      {
                        id: "INV-2025-006",
                        project: "Downtown Office Tower",
                        entity: "Glass & Glazing Experts",
                        date: "May 28, 2025",
                        amount: "$189,200",
                        dueDate: "Jun 28, 2025",
                        status: "Pending",
                      },
                      {
                        id: "INV-2025-007",
                        project: "Riverside Apartments",
                        entity: "Plumbing Systems Inc.",
                        date: "May 30, 2025",
                        amount: "$92,450",
                        dueDate: "Jun 30, 2025",
                        status: "Pending",
                      },
                    ].map((invoice) => (
                      <tr key={invoice.id} className="border-b">
                        <td className="py-3 font-medium">{invoice.id}</td>
                        <td className="py-3">{invoice.project}</td>
                        <td className="py-3">{invoice.entity}</td>
                        <td className="py-3">{invoice.date}</td>
                        <td className="py-3">{invoice.amount}</td>
                        <td className="py-3">{invoice.dueDate}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              invoice.status === "Paid"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : invoice.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

