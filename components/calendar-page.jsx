"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus, Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [activeView, setActiveView] = useState("month")

  const nextMonth = () => {
    const next = new Date(currentMonth)
    next.setMonth(next.getMonth() + 1)
    setCurrentMonth(next)
  }

  const prevMonth = () => {
    const prev = new Date(currentMonth)
    prev.setMonth(prev.getMonth() - 1)
    setCurrentMonth(prev)
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const days = getDaysInMonth(currentMonth)
  const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" })

  // Sample events
  const events = [
    { day: 5, title: "Concrete Pouring", project: "Downtown Office Tower", type: "construction" },
    { day: 8, title: "Site Inspection", project: "Riverside Apartments", type: "inspection" },
    { day: 12, title: "Material Delivery", project: "Industrial Park", type: "delivery" },
    { day: 15, title: "Team Meeting", project: "All Projects", type: "meeting" },
    { day: 18, title: "Permit Review", project: "Community Center", type: "administrative" },
    { day: 22, title: "Safety Training", project: "All Sites", type: "training" },
    { day: 25, title: "Client Meeting", project: "Downtown Office Tower", type: "meeting" },
  ]

  // Weekly view events
  const weeklyEvents = [
    {
      day: "Monday",
      events: [
        { time: "9:00 AM", title: "Team Standup", project: "All Projects" },
        { time: "11:00 AM", title: "Site Visit", project: "Downtown Office Tower" },
      ],
    },
    {
      day: "Tuesday",
      events: [
        { time: "10:00 AM", title: "Vendor Meeting", project: "Riverside Apartments" },
        { time: "2:00 PM", title: "Budget Review", project: "All Projects" },
      ],
    },
    {
      day: "Wednesday",
      events: [
        { time: "9:30 AM", title: "Material Inspection", project: "Industrial Park" },
        { time: "1:00 PM", title: "Safety Audit", project: "Community Center" },
      ],
    },
    {
      day: "Thursday",
      events: [
        { time: "11:00 AM", title: "Progress Review", project: "Highway Bridge Repair" },
        { time: "3:00 PM", title: "Client Call", project: "Downtown Office Tower" },
      ],
    },
    {
      day: "Friday",
      events: [
        { time: "10:00 AM", title: "Weekly Report", project: "All Projects" },
        { time: "2:30 PM", title: "Team Meeting", project: "All Projects" },
      ],
    },
  ]

  // List of upcoming deadlines
  const deadlines = [
    { date: "Jun 15, 2025", title: "Foundation Completion", project: "Downtown Office Tower", status: "On Track" },
    { date: "Jul 10, 2025", title: "Structural Inspection", project: "Riverside Apartments", status: "At Risk" },
    { date: "Jul 22, 2025", title: "Electrical Installation", project: "Industrial Park", status: "Delayed" },
    { date: "Aug 5, 2025", title: "Plumbing Completion", project: "Community Center", status: "On Track" },
    { date: "Aug 18, 2025", title: "Exterior Finishing", project: "Highway Bridge Repair", status: "On Track" },
    { date: "Sep 1, 2025", title: "Final Inspection", project: "Downtown Office Tower", status: "Not Started" },
    { date: "Sep 15, 2025", title: "Handover", project: "Industrial Park", status: "Not Started" },
  ]

  const getEventBadgeColor = (type) => {
    switch (type) {
      case "construction":
        return "bg-blue-500 text-white"
      case "inspection":
        return "bg-yellow-500 text-white"
      case "delivery":
        return "bg-green-500 text-white"
      case "meeting":
        return "bg-purple-500 text-white"
      case "administrative":
        return "bg-gray-500 text-white"
      case "training":
        return "bg-red-500 text-white"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "On Track":
        return <Badge variant="success">🟢 On Track</Badge>
      case "At Risk":
        return <Badge variant="warning">🟠 At Risk</Badge>
      case "Delayed":
        return <Badge variant="destructive">🔴 Delayed</Badge>
      case "Not Started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground">Manage your construction project timeline</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <Tabs defaultValue="month" onValueChange={setActiveView} className="space-y-4">
        <TabsList>
          <TabsTrigger value="month">Month View</TabsTrigger>
          <TabsTrigger value="week">Week View</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
        </TabsList>

        <TabsContent value="month" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{monthName}</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={prevMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 font-medium">
                    {day}
                  </div>
                ))}
                {days.map((day, index) => (
                  <div key={index} className={`min-h-24 border p-1 ${day ? "bg-background" : "bg-muted/20"}`}>
                    {day && (
                      <>
                        <div className="text-right text-sm">{day}</div>
                        <div className="mt-1 space-y-1">
                          {events
                            .filter((event) => event.day === day)
                            .map((event, eventIndex) => (
                              <div key={eventIndex} className={`rounded p-1 text-xs ${getEventBadgeColor(event.type)}`}>
                                <div className="font-medium">{event.title}</div>
                                <div className="opacity-80">{event.project}</div>
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {weeklyEvents.map((daySchedule, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium">{daySchedule.day}</h3>
                    <div className="space-y-2 pl-4 border-l-2 border-primary">
                      {daySchedule.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-start">
                          <div className="w-20 text-sm font-medium">{event.time}</div>
                          <div className="flex-1 rounded-md border p-2">
                            <div className="font-medium">{event.title}</div>
                            <div className="text-xs text-muted-foreground">{event.project}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deadlines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <div className="font-medium">{deadline.title}</div>
                      <div className="text-sm text-muted-foreground">{deadline.project}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm">{deadline.date}</div>
                      {getStatusBadge(deadline.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

