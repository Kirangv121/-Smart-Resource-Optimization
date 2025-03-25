"use client"

// Equipment data for the Resources section
export const equipmentData = {
  // Equipment inventory data
  inventory: [
    {
      id: "EQ-001",
      type: "Excavator",
      model: "CAT 336",
      location: "Downtown Office Tower",
      status: "Active",
      lastMaintenance: "May 10, 2025",
      nextMaintenance: "Aug 10, 2025",
      utilization: 85,
      condition: "Good",
      operator: "John Smith",
    },
    {
      id: "EQ-002",
      type: "Crane",
      model: "Liebherr LTM 1100",
      location: "Riverside Apartments",
      status: "Active",
      lastMaintenance: "Apr 15, 2025",
      nextMaintenance: "Jul 15, 2025",
      utilization: 72,
      condition: "Excellent",
      operator: "Maria Garcia",
    },
    {
      id: "EQ-003",
      type: "Bulldozer",
      model: "Komatsu D65",
      location: "Industrial Park",
      status: "Maintenance",
      lastMaintenance: "Jun 1, 2025",
      nextMaintenance: "Jun 8, 2025",
      utilization: 65,
      condition: "Fair",
      operator: "Robert Johnson",
    },
    {
      id: "EQ-004",
      type: "Concrete Mixer",
      model: "SANY SY204C",
      location: "Community Center",
      status: "Active",
      lastMaintenance: "May 20, 2025",
      nextMaintenance: "Aug 20, 2025",
      utilization: 78,
      condition: "Good",
      operator: "Emily Davis",
    },
    {
      id: "EQ-005",
      type: "Forklift",
      model: "Toyota 8FGU25",
      location: "Downtown Office Tower",
      status: "Active",
      lastMaintenance: "May 5, 2025",
      nextMaintenance: "Aug 5, 2025",
      utilization: 60,
      condition: "Good",
      operator: "Michael Wilson",
    },
    {
      id: "EQ-006",
      type: "Generator",
      model: "Caterpillar XQ230",
      location: "Highway Bridge Repair",
      status: "Active",
      lastMaintenance: "Jun 2, 2025",
      nextMaintenance: "Sep 2, 2025",
      utilization: 82,
      condition: "Excellent",
      operator: "Sarah Brown",
    },
    {
      id: "EQ-007",
      type: "Compressor",
      model: "Atlas Copco XAS 750",
      location: "Riverside Apartments",
      status: "Repair",
      lastMaintenance: "May 25, 2025",
      nextMaintenance: "Jun 10, 2025",
      utilization: 0,
      condition: "Poor",
      operator: "Unassigned",
    },
  ],

  // Equipment utilization data
  utilization: [
    { name: "Excavators", utilization: 85, target: 80 },
    { name: "Cranes", utilization: 72, target: 75 },
    { name: "Bulldozers", utilization: 65, target: 70 },
    { name: "Concrete Mixers", utilization: 78, target: 75 },
    { name: "Forklifts", utilization: 60, target: 65 },
  ],

  // Equipment status data
  status: [
    { name: "Active", value: 65 },
    { name: "Maintenance", value: 15 },
    { name: "Repair", value: 10 },
    { name: "Idle", value: 10 },
  ],

  // Equipment maintenance data
  maintenance: [
    { month: "Jan", preventive: 12, corrective: 5 },
    { month: "Feb", preventive: 15, corrective: 3 },
    { month: "Mar", preventive: 10, corrective: 7 },
    { month: "Apr", preventive: 18, corrective: 4 },
    { month: "May", preventive: 14, corrective: 6 },
    { month: "Jun", preventive: 16, corrective: 2 },
  ],

  // Equipment allocation by project
  allocation: [
    { project: "Downtown Office", excavators: 3, cranes: 2, bulldozers: 1, mixers: 2, forklifts: 3 },
    { project: "Riverside Apts", excavators: 2, cranes: 1, bulldozers: 1, mixers: 1, forklifts: 2 },
    { project: "Industrial Park", excavators: 4, cranes: 0, bulldozers: 2, mixers: 1, forklifts: 1 },
    { project: "Community Center", excavators: 1, cranes: 1, bulldozers: 1, mixers: 2, forklifts: 1 },
    { project: "Highway Bridge", excavators: 2, cranes: 2, bulldozers: 0, mixers: 1, forklifts: 0 },
  ],

  // Equipment alerts
  alerts: [
    {
      id: 1,
      equipment: "Excavator #2",
      location: "Downtown Office Tower",
      issue: "Maintenance Overdue",
      severity: "critical",
      dueDate: "Jun 5, 2025",
      assignedTo: "Maintenance Team A",
    },
    {
      id: 2,
      equipment: "Crane #5",
      location: "Riverside Apartments",
      issue: "Maintenance Due",
      severity: "warning",
      dueDate: "Jun 15, 2025",
      assignedTo: "Maintenance Team B",
    },
    {
      id: 3,
      equipment: "Bulldozer #1",
      location: "Industrial Park",
      issue: "Low Fuel",
      severity: "warning",
      dueDate: "Immediate",
      assignedTo: "Site Manager",
    },
    {
      id: 4,
      equipment: "Forklift #3",
      location: "Community Center",
      issue: "Operational Check",
      severity: "normal",
      dueDate: "Jun 30, 2025",
      assignedTo: "Operator",
    },
    {
      id: 5,
      equipment: "Generator #2",
      location: "Highway Bridge Repair",
      issue: "Oil Change Required",
      severity: "warning",
      dueDate: "Jun 12, 2025",
      assignedTo: "Maintenance Team C",
    },
  ],
}

