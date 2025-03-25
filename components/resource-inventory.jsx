"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function ResourceInventory() {
  const inventory = [
    {
      id: 1,
      name: "Concrete (Ready Mix)",
      quantity: 120,
      unit: "cubic yards",
      level: 65,
      status: "normal",
      location: "Downtown Office Tower",
    },
    {
      id: 2,
      name: "Steel Beams (I-Beam)",
      quantity: 85,
      unit: "tons",
      level: 42,
      status: "warning",
      location: "Riverside Apartments",
    },
    {
      id: 3,
      name: "Lumber (2x4)",
      quantity: 1200,
      unit: "pieces",
      level: 78,
      status: "normal",
      location: "Industrial Park Expansion",
    },
    {
      id: 4,
      name: "Bricks (Standard)",
      quantity: 8500,
      unit: "pieces",
      level: 25,
      status: "critical",
      location: "Community Center",
    },
    {
      id: 5,
      name: "Excavators",
      quantity: 4,
      unit: "units",
      level: 50,
      status: "warning",
      location: "Multiple Sites",
    },
    {
      id: 6,
      name: "Cement",
      quantity: 350,
      unit: "bags",
      level: 85,
      status: "normal",
      location: "Highway Bridge Repair",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "critical":
        return <Badge variant="destructive">🔴 Critical</Badge>
      case "warning":
        return <Badge variant="warning">🟠 Low</Badge>
      case "normal":
        return <Badge variant="success">🟢 Normal</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Material</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Stock Level</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>
                {item.quantity} {item.unit}
              </TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={item.level} className="h-2 w-24" />
                  <span className="text-xs">{item.level}%</span>
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(item.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

