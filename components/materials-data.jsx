"use client"

// Materials data for the Resources section
export const materialsData = {
  // Materials inventory data
  inventory: [
    {
      id: 1,
      name: "Concrete (Ready Mix)",
      quantity: 120,
      unit: "cubic yards",
      level: 25,
      status: "low",
      location: "Downtown Office Tower",
      supplier: "Concrete Solutions LLC",
      reorderPoint: 50,
      lastDelivery: "May 15, 2025",
    },
    {
      id: 2,
      name: "Steel Beams (I-Beam)",
      quantity: 85,
      unit: "tons",
      level: 42,
      status: "warning",
      location: "Riverside Apartments",
      supplier: "Steel Suppliers Inc.",
      reorderPoint: 40,
      lastDelivery: "May 10, 2025",
    },
    {
      id: 3,
      name: "Lumber (2x4)",
      quantity: 1200,
      unit: "pieces",
      level: 78,
      status: "normal",
      location: "Industrial Park Expansion",
      supplier: "Lumber Yard Co.",
      reorderPoint: 500,
      lastDelivery: "May 22, 2025",
    },
    {
      id: 4,
      name: "Bricks (Standard)",
      quantity: 8500,
      unit: "pieces",
      level: 85,
      status: "normal",
      location: "Community Center",
      supplier: "Brick & Block Masters",
      reorderPoint: 2000,
      lastDelivery: "May 18, 2025",
    },
    {
      id: 5,
      name: "Glass Panels",
      quantity: 150,
      unit: "panels",
      level: 50,
      status: "warning",
      location: "Downtown Office Tower",
      supplier: "Glass Solutions",
      reorderPoint: 75,
      lastDelivery: "May 5, 2025",
    },
    {
      id: 6,
      name: "Cement",
      quantity: 350,
      unit: "bags",
      level: 85,
      status: "normal",
      location: "Highway Bridge Repair",
      supplier: "Concrete Solutions LLC",
      reorderPoint: 100,
      lastDelivery: "May 25, 2025",
    },
    {
      id: 7,
      name: "Rebar",
      quantity: 200,
      unit: "tons",
      level: 65,
      status: "normal",
      location: "Multiple Sites",
      supplier: "Steel Suppliers Inc.",
      reorderPoint: 75,
      lastDelivery: "May 20, 2025",
    },
  ],

  // Materials usage data
  usage: [
    { name: "Concrete", usage: 85, target: 80 },
    { name: "Steel", usage: 72, target: 75 },
    { name: "Lumber", usage: 65, target: 70 },
    { name: "Bricks", usage: 78, target: 75 },
    { name: "Glass", usage: 60, target: 65 },
  ],

  // Materials status data
  status: [
    { name: "In Stock", value: 55 },
    { name: "On Order", value: 25 },
    { name: "Low Stock", value: 15 },
    { name: "Out of Stock", value: 5 },
  ],

  // Materials cost data
  costs: [
    { month: "Jan", concrete: 120000, steel: 80000, lumber: 50000 },
    { month: "Feb", concrete: 140000, steel: 90000, lumber: 45000 },
    { month: "Mar", concrete: 130000, steel: 85000, lumber: 55000 },
    { month: "Apr", concrete: 150000, steel: 95000, lumber: 60000 },
    { month: "May", concrete: 160000, steel: 100000, lumber: 65000 },
    { month: "Jun", concrete: 155000, steel: 105000, lumber: 70000 },
  ],

  // Materials allocation by project
  allocation: [
    { project: "Downtown Office", concrete: 45, steel: 35, lumber: 20, bricks: 40, glass: 60 },
    { project: "Riverside Apts", concrete: 35, steel: 25, lumber: 30, bricks: 50, glass: 30 },
    { project: "Industrial Park", concrete: 50, steel: 45, lumber: 15, bricks: 10, glass: 5 },
    { project: "Community Center", concrete: 30, steel: 20, lumber: 25, bricks: 60, glass: 35 },
    { project: "Highway Bridge", concrete: 55, steel: 40, lumber: 10, bricks: 5, glass: 0 },
  ],

  // Materials alerts
  alerts: [
    {
      id: 1,
      material: "Concrete (Ready Mix)",
      location: "Downtown Office Tower",
      issue: "Low Stock",
      severity: "critical",
      requiredBy: "Jun 10, 2025",
      assignedTo: "Procurement Team",
    },
    {
      id: 2,
      material: "Steel Beams",
      location: "Riverside Apartments",
      issue: "Order Pending",
      severity: "warning",
      requiredBy: "Jun 20, 2025",
      assignedTo: "Procurement Team",
    },
    {
      id: 3,
      material: "Lumber (2x4)",
      location: "Industrial Park",
      issue: "Delivery Delayed",
      severity: "warning",
      requiredBy: "Jun 15, 2025",
      assignedTo: "Logistics Manager",
    },
    {
      id: 4,
      material: "Bricks",
      location: "Community Center",
      issue: "Quality Check",
      severity: "normal",
      requiredBy: "Jun 30, 2025",
      assignedTo: "Quality Control",
    },
    {
      id: 5,
      material: "Glass Panels",
      location: "Downtown Office Tower",
      issue: "Special Order Required",
      severity: "warning",
      requiredBy: "Jul 5, 2025",
      assignedTo: "Procurement Team",
    },
  ],

  // Supplier data
  suppliers: [
    {
      id: 1,
      name: "Steel Suppliers Inc.",
      materials: "Steel, Rebar",
      delivery: 92,
      quality: 95,
      price: 85,
      rating: "A",
      contact: "John Smith",
      phone: "(555) 123-4567",
      email: "john@steelsuppliers.com",
    },
    {
      id: 2,
      name: "Concrete Solutions LLC",
      materials: "Concrete, Cement",
      delivery: 88,
      quality: 90,
      price: 82,
      rating: "B+",
      contact: "Maria Garcia",
      phone: "(555) 234-5678",
      email: "maria@concretesolutions.com",
    },
    {
      id: 3,
      name: "Lumber Yard Co.",
      materials: "Lumber, Plywood",
      delivery: 95,
      quality: 88,
      price: 90,
      rating: "A-",
      contact: "Robert Johnson",
      phone: "(555) 345-6789",
      email: "robert@lumberyard.com",
    },
    {
      id: 4,
      name: "Brick & Block Masters",
      materials: "Bricks, Blocks",
      delivery: 85,
      quality: 92,
      price: 80,
      rating: "B+",
      contact: "Emily Davis",
      phone: "(555) 456-7890",
      email: "emily@brickblockmaster.com",
    },
    {
      id: 5,
      name: "Glass Solutions",
      materials: "Glass Panels, Windows",
      delivery: 90,
      quality: 96,
      price: 75,
      rating: "A-",
      contact: "Michael Wilson",
      phone: "(555) 567-8901",
      email: "michael@glasssolutions.com",
    },
  ],
}

