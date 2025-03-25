"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function ProjectFinancialTable() {
  const projects = [
    {
      id: 1,
      name: "Downtown Office Tower",
      budget: 12500000,
      spent: 8200000,
      committed: 9800000,
      remaining: 2700000,
      variance: -500000,
      status: "Over Budget",
    },
    {
      id: 2,
      name: "Riverside Apartments",
      budget: 8700000,
      spent: 3600000,
      committed: 4200000,
      remaining: 4500000,
      variance: 300000,
      status: "Under Budget",
    },
    {
      id: 3,
      name: "Industrial Park Expansion",
      budget: 5200000,
      spent: 4800000,
      committed: 5100000,
      remaining: 100000,
      variance: -100000,
      status: "Over Budget",
    },
    {
      id: 4,
      name: "Community Center",
      budget: 3800000,
      spent: 1200000,
      committed: 1500000,
      remaining: 2300000,
      variance: 0,
      status: "On Budget",
    },
    {
      id: 5,
      name: "Highway Bridge Repair",
      budget: 7500000,
      spent: 2100000,
      committed: 3500000,
      remaining: 4000000,
      variance: 200000,
      status: "Under Budget",
    },
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Under Budget":
        return <Badge variant="success">🟢 Under Budget</Badge>
      case "On Budget":
        return <Badge variant="default">🟠 On Budget</Badge>
      case "Over Budget":
        return <Badge variant="destructive">🔴 Over Budget</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left font-medium">Project</th>
            <th className="py-3 text-left font-medium">Budget</th>
            <th className="py-3 text-left font-medium">Spent</th>
            <th className="py-3 text-left font-medium">Committed</th>
            <th className="py-3 text-left font-medium">Remaining</th>
            <th className="py-3 text-left font-medium">Variance</th>
            <th className="py-3 text-left font-medium">Status</th>
            <th className="py-3 text-left font-medium">Spent %</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b">
              <td className="py-3 font-medium">{project.name}</td>
              <td className="py-3">{formatCurrency(project.budget)}</td>
              <td className="py-3">{formatCurrency(project.spent)}</td>
              <td className="py-3">{formatCurrency(project.committed)}</td>
              <td className="py-3">{formatCurrency(project.remaining)}</td>
              <td className="py-3" style={{ color: project.variance >= 0 ? "var(--success)" : "var(--destructive)" }}>
                {formatCurrency(project.variance)}
              </td>
              <td className="py-3">{getStatusBadge(project.status)}</td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <Progress value={(project.spent / project.budget) * 100} className="h-2 w-24" />
                  <span>
                    {Math.round((project.spent / project.budget) * 100)}
                    {"%"}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

