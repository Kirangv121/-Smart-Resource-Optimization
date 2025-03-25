"use client"

// Labor data for the Resources section
export const laborData = {
  // Labor workforce data
  workforce: [
    {
      id: 1,
      name: "John Smith",
      role: "Site Supervisor",
      project: "Downtown Office Tower",
      hours: 42,
      overtime: 2,
      performance: 92,
      safety: 98,
      certifications: ["OSHA 30-Hour", "First Aid", "Confined Space"],
      contact: "(555) 123-4567",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Electrician",
      project: "Riverside Apartments",
      hours: 40,
      overtime: 0,
      performance: 88,
      safety: 96,
      certifications: ["OSHA 10-Hour", "Electrical Safety"],
      contact: "(555) 234-5678",
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Crane Operator",
      project: "Industrial Park",
      hours: 38,
      overtime: 0,
      performance: 85,
      safety: 95,
      certifications: ["OSHA 10-Hour", "Crane Operation", "Rigging"],
      contact: "(555) 345-6789",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Safety Officer",
      project: "All Projects",
      hours: 45,
      overtime: 5,
      performance: 90,
      safety: 99,
      certifications: ["OSHA 30-Hour", "First Aid", "Incident Investigation"],
      contact: "(555) 456-7890",
    },
    {
      id: 5,
      name: "Michael Wilson",
      role: "General Laborer",
      project: "Community Center",
      hours: 40,
      overtime: 0,
      performance: 82,
      safety: 90,
      certifications: ["OSHA 10-Hour"],
      contact: "(555) 567-8901",
    },
    {
      id: 6,
      name: "Sarah Brown",
      role: "Carpenter",
      project: "Downtown Office Tower",
      hours: 41,
      overtime: 1,
      performance: 87,
      safety: 94,
      certifications: ["OSHA 10-Hour", "Fall Protection"],
      contact: "(555) 678-9012",
    },
    {
      id: 7,
      name: "David Lee",
      role: "Plumber",
      project: "Riverside Apartments",
      hours: 39,
      overtime: 0,
      performance: 86,
      safety: 92,
      certifications: ["OSHA 10-Hour", "Plumbing License"],
      contact: "(555) 789-0123",
    },
  ],

  // Labor utilization data
  utilization: [
    { name: "Skilled Workers", utilization: 92 },
    { name: "General Labor", utilization: 85 },
    { name: "Supervisors", utilization: 78 },
    { name: "Engineers", utilization: 88 },
    { name: "Electricians", utilization: 90 },
  ],

  // Labor distribution data
  distribution: [
    { name: "Skilled Workers", value: 45 },
    { name: "General Labor", value: 30 },
    { name: "Supervisors", value: 10 },
    { name: "Engineers", value: 15 },
  ],

  // Labor productivity data
  productivity: [
    { month: "Jan", productivity: 82, target: 80 },
    { month: "Feb", productivity: 85, target: 80 },
    { month: "Mar", productivity: 83, target: 80 },
    { month: "Apr", productivity: 87, target: 85 },
    { month: "May", productivity: 90, target: 85 },
    { month: "Jun", productivity: 92, target: 90 },
  ],

  // Labor allocation by project
  allocation: [
    { project: "Downtown Office", skilled: 45, general: 30, supervisors: 10, engineers: 15 },
    { project: "Riverside Apts", skilled: 35, general: 40, supervisors: 8, engineers: 12 },
    { project: "Industrial Park", skilled: 50, general: 25, supervisors: 12, engineers: 18 },
    { project: "Community Center", skilled: 30, general: 35, supervisors: 7, engineers: 10 },
    { project: "Highway Bridge", skilled: 40, general: 45, supervisors: 9, engineers: 14 },
  ],

  // Labor alerts
  alerts: [
    {
      id: 1,
      issue: "Skilled Workers Shortage",
      location: "Downtown Office Tower",
      severity: "critical",
      impact: "Schedule Delay",
      requiredBy: "Jun 10, 2025",
      assignedTo: "HR Manager",
    },
    {
      id: 2,
      issue: "Safety Training Updates",
      location: "All Sites",
      severity: "warning",
      impact: "Compliance Risk",
      requiredBy: "Jun 30, 2025",
      assignedTo: "Safety Officer",
    },
    {
      id: 3,
      issue: "Overtime Hours",
      location: "Riverside Apartments",
      severity: "warning",
      impact: "Budget Impact",
      requiredBy: "Immediate",
      assignedTo: "Project Manager",
    },
    {
      id: 4,
      issue: "Certification Renewal",
      location: "Industrial Park",
      severity: "normal",
      impact: "Regulatory",
      requiredBy: "Jul 15, 2025",
      assignedTo: "HR Manager",
    },
    {
      id: 5,
      issue: "Productivity Below Target",
      location: "Highway Bridge",
      severity: "warning",
      impact: "Schedule Risk",
      requiredBy: "Immediate",
      assignedTo: "Site Supervisor",
    },
  ],

  // Safety incidents data
  safety: [
    { project: "Downtown Office Tower", incidents: 2, nearMisses: 5, lastIncident: "45 days ago" },
    { project: "Riverside Apartments", incidents: 1, nearMisses: 3, lastIncident: "78 days ago" },
    { project: "Industrial Park", incidents: 0, nearMisses: 2, lastIncident: "No incidents" },
    { project: "Community Center", incidents: 1, nearMisses: 4, lastIncident: "32 days ago" },
    { project: "Highway Bridge", incidents: 3, nearMisses: 7, lastIncident: "12 days ago" },
  ],
}

