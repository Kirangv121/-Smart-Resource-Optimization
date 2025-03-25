"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Plus, Mail, Phone, Filter, Download, FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamPerformanceChart } from "@/components/team-performance-chart"

export function TeamPage() {
  const [activeTab, setActiveTab] = useState("members")

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Project Manager",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      avatar: "/placeholder.svg?height=40&width=40",
      projects: ["Downtown Office Tower", "Community Center"],
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Site Engineer",
      email: "jane.smith@example.com",
      phone: "(555) 234-5678",
      avatar: "/placeholder.svg?height=40&width=40",
      projects: ["Riverside Apartments"],
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Construction Supervisor",
      email: "robert.johnson@example.com",
      phone: "(555) 345-6789",
      avatar: "/placeholder.svg?height=40&width=40",
      projects: ["Industrial Park Expansion", "Highway Bridge Repair"],
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Architect",
      email: "emily.davis@example.com",
      phone: "(555) 456-7890",
      avatar: "/placeholder.svg?height=40&width=40",
      projects: ["Downtown Office Tower", "Community Center"],
    },
    {
      id: 5,
      name: "Michael Wilson",
      role: "Safety Officer",
      email: "michael.wilson@example.com",
      phone: "(555) 567-8901",
      avatar: "/placeholder.svg?height=40&width=40",
      projects: ["All Projects"],
    },
    {
      id: 6,
      name: "Sarah Brown",
      role: "Procurement Manager",
      email: "sarah.brown@example.com",
      phone: "(555) 678-9012",
      avatar: "/placeholder.svg?height=40&width=40",
      projects: ["All Projects"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-muted-foreground">Manage your construction team members</p>
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
            Add Team Member
          </Button>
        </div>
      </div>

      <Tabs defaultValue="members" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{member.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Assigned Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.projects.map((project) => (
                          <span
                            key={project}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance Metrics</CardTitle>
              <CardDescription>Productivity and efficiency by team member</CardDescription>
            </CardHeader>
            <CardContent>
              <TeamPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Schedule</CardTitle>
              <CardDescription>Current assignments and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Team Member</th>
                      <th className="py-3 text-left font-medium">Current Assignment</th>
                      <th className="py-3 text-left font-medium">Location</th>
                      <th className="py-3 text-left font-medium">Start Date</th>
                      <th className="py-3 text-left font-medium">End Date</th>
                      <th className="py-3 text-left font-medium">Utilization</th>
                      <th className="py-3 text-left font-medium">Next Assignment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="border-b">
                        <td className="py-3 font-medium">{member.name}</td>
                        <td className="py-3">{member.projects[0]}</td>
                        <td className="py-3">
                          {member.projects[0] === "All Projects" ? "Multiple" : "Site " + ((member.id % 3) + 1)}
                        </td>
                        <td className="py-3">May {member.id + 10}, 2025</td>
                        <td className="py-3">Aug {member.id + 15}, 2025</td>
                        <td className="py-3">{75 + ((member.id * 5) % 20)}%</td>
                        <td className="py-3">{member.projects.length > 1 ? member.projects[1] : "TBD"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Certifications</CardTitle>
              <CardDescription>Professional certifications and training</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Team Member</th>
                      <th className="py-3 text-left font-medium">Certification</th>
                      <th className="py-3 text-left font-medium">Issuing Organization</th>
                      <th className="py-3 text-left font-medium">Date Obtained</th>
                      <th className="py-3 text-left font-medium">Expiration</th>
                      <th className="py-3 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        member: "John Doe",
                        cert: "PMP Certification",
                        org: "Project Management Institute",
                        obtained: "Mar 15, 2022",
                        expiration: "Mar 15, 2025",
                        status: "Active",
                      },
                      {
                        member: "John Doe",
                        cert: "OSHA 30-Hour",
                        org: "OSHA",
                        obtained: "Jan 10, 2023",
                        expiration: "Jan 10, 2026",
                        status: "Active",
                      },
                      {
                        member: "Jane Smith",
                        cert: "Professional Engineer (PE)",
                        org: "State Board",
                        obtained: "May 22, 2021",
                        expiration: "May 22, 2025",
                        status: "Active",
                      },
                      {
                        member: "Robert Johnson",
                        cert: "Construction Supervisor License",
                        org: "State Board",
                        obtained: "Nov 5, 2022",
                        expiration: "Nov 5, 2024",
                        status: "Active",
                      },
                      {
                        member: "Emily Davis",
                        cert: "Registered Architect",
                        org: "AIA",
                        obtained: "Jun 18, 2020",
                        expiration: "Jun 18, 2024",
                        status: "Renewal Required",
                      },
                      {
                        member: "Michael Wilson",
                        cert: "Safety Professional (CSP)",
                        org: "BCSP",
                        obtained: "Feb 28, 2023",
                        expiration: "Feb 28, 2026",
                        status: "Active",
                      },
                      {
                        member: "Sarah Brown",
                        cert: "Certified Purchasing Manager",
                        org: "ISM",
                        obtained: "Apr 12, 2022",
                        expiration: "Apr 12, 2025",
                        status: "Active",
                      },
                    ].map((cert, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{cert.member}</td>
                        <td className="py-3">{cert.cert}</td>
                        <td className="py-3">{cert.org}</td>
                        <td className="py-3">{cert.obtained}</td>
                        <td className="py-3">{cert.expiration}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              cert.status === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            }`}
                          >
                            {cert.status}
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

