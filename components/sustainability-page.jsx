"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Recycle, Droplets, Wind } from "lucide-react"
import { CarbonFootprintChart } from "@/components/carbon-footprint-chart"
import { CircleProgress } from "@/components/circle-progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

export function SustainabilityPage() {
  const [activeTab, setActiveTab] = useState("carbon")

  const waterUsageData = [
    { month: "Jan", usage: 450, target: 500, industry: 550 },
    { month: "Feb", usage: 420, target: 490, industry: 550 },
    { month: "Mar", usage: 480, target: 480, industry: 550 },
    { month: "Apr", usage: 400, target: 470, industry: 550 },
    { month: "May", usage: 380, target: 460, industry: 550 },
    { month: "Jun", usage: 350, target: 450, industry: 550 },
  ]

  const energyData = [
    { project: "Downtown Office", renewable: 35, nonRenewable: 65 },
    { project: "Riverside Apts", renewable: 30, nonRenewable: 70 },
    { project: "Industrial Park", renewable: 20, nonRenewable: 80 },
    { project: "Community Center", renewable: 40, nonRenewable: 60 },
    { project: "Highway Bridge", renewable: 15, nonRenewable: 85 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sustainability</h1>
        <p className="text-muted-foreground">Track environmental impact and sustainability metrics</p>
      </div>

      <Tabs defaultValue="carbon" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="carbon">Carbon Impact</TabsTrigger>
          <TabsTrigger value="materials">Sustainable Materials</TabsTrigger>
          <TabsTrigger value="water">Water Usage</TabsTrigger>
          <TabsTrigger value="energy">Energy Efficiency</TabsTrigger>
        </TabsList>

        <TabsContent value="carbon" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint</CardTitle>
              <CardDescription>CO2 emissions across all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">-12%</div>
                    <p className="text-xs text-muted-foreground">Reduction from last year</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Downtown Office Tower</span>
                    <span className="font-medium">125 tons</span>
                  </div>
                  <Progress value={62} className="h-2" />
                  <p className="text-xs text-muted-foreground">12% below industry average</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Riverside Apartments</span>
                    <span className="font-medium">95 tons</span>
                  </div>
                  <Progress value={48} className="h-2" />
                  <p className="text-xs text-muted-foreground">18% below industry average</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Industrial Park</span>
                    <span className="font-medium">210 tons</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">5% above industry average</p>
                </div>
              </div>

              <div className="mt-8">
                <CarbonFootprintChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Materials</CardTitle>
              <CardDescription>Recycled and eco-friendly material usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">42%</div>
                    <p className="text-xs text-muted-foreground">Materials from sustainable sources</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Recycled Steel</h4>
                  <div className="flex items-center">
                    <Progress value={65} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">65%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Sustainable Timber</h4>
                  <div className="flex items-center">
                    <Progress value={78} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">78%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Low-Carbon Concrete</h4>
                  <div className="flex items-center">
                    <Progress value={35} className="h-2 flex-1" />
                    <span className="ml-2 text-sm">35%</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { project: "Downtown Office", recycled: 58, local: 72, certified: 65 },
                        { project: "Riverside Apts", recycled: 45, local: 80, certified: 55 },
                        { project: "Industrial Park", recycled: 32, local: 65, certified: 40 },
                        { project: "Community Center", recycled: 62, local: 85, certified: 70 },
                        { project: "Highway Bridge", recycled: 38, local: 60, certified: 45 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="project" />
                      <YAxis
                        label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }}
                        domain={[0, 100]}
                      />
                      <Tooltip formatter={(value) => [`${value}%`, ""]} />
                      <Legend />
                      <Bar dataKey="recycled" name="Recycled Materials" fill="hsl(var(--primary))" />
                      <Bar dataKey="local" name="Local Sourcing" fill="hsl(var(--secondary))" />
                      <Bar dataKey="certified" name="Eco-Certified" fill="hsl(var(--success))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="water" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Usage</CardTitle>
              <CardDescription>Water consumption and conservation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Droplets className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">-18%</div>
                    <p className="text-xs text-muted-foreground">Reduction in water usage</p>
                  </div>
                </div>

                <div className="col-span-3">
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={waterUsageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis label={{ value: "Water Usage (kL)", angle: -90, position: "insideLeft" }} />
                        <Tooltip formatter={(value) => [`${value} kL`, ""]} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="usage"
                          name="Actual Usage"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="target"
                          name="Target"
                          stroke="hsl(var(--success))"
                          strokeDasharray="5 5"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="industry"
                          name="Industry Average"
                          stroke="hsl(var(--muted-foreground))"
                          strokeDasharray="3 3"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-medium">Water Conservation Initiatives</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Rainwater Harvesting</h4>
                    <p className="text-sm text-muted-foreground">
                      Implemented at 3 project sites, saving approximately 120,000 gallons annually.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Low-Flow Fixtures</h4>
                    <p className="text-sm text-muted-foreground">
                      All projects now use low-flow fixtures, reducing water consumption by up to 30%.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Water Recycling</h4>
                    <p className="text-sm text-muted-foreground">
                      Concrete mixing water is recycled and reused where possible, saving 15% of water usage.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Drought-Resistant Landscaping</h4>
                    <p className="text-sm text-muted-foreground">
                      Native plants and efficient irrigation reduce landscape water needs by 40%.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="energy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Energy Efficiency</CardTitle>
              <CardDescription>Energy usage and renewable sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Wind className="h-8 w-8 text-primary" />
                  </div>
                  <CircleProgress value={28} label="Renewable Energy" color="success" />
                </div>

                <div className="col-span-3">
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={energyData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="project" type="category" />
                        <Tooltip formatter={(value) => [`${value}%`, ""]} />
                        <Legend />
                        <Bar dataKey="renewable" name="Renewable Energy" stackId="a" fill="hsl(var(--success))" />
                        <Bar dataKey="nonRenewable" name="Non-Renewable Energy" stackId="a" fill="hsl(var(--muted))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-medium">Energy Efficiency Initiatives</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Solar Panel Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      Solar panels installed at Downtown Office Tower and Community Center, generating 15% of total
                      energy needs.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">LED Lighting</h4>
                    <p className="text-sm text-muted-foreground">
                      All projects converted to LED lighting, reducing lighting energy consumption by 60%.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Energy-Efficient Equipment</h4>
                    <p className="text-sm text-muted-foreground">
                      Construction equipment upgraded to energy-efficient models, reducing fuel consumption by 25%.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium mb-2">Smart Energy Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated systems implemented to optimize energy usage during construction, saving 20% on energy
                      costs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

