"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Briefcase, Mail, Phone } from "lucide-react"

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">View and update your profile information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <CardDescription className="flex items-center">
                <Briefcase className="mr-1 h-4 w-4" />
                Project Manager
              </CardDescription>
            </div>
            <div className="ml-auto flex gap-2">
              <Button variant="outline">Edit Profile</Button>
              <Button>Upload Photo</Button>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input id="location" defaultValue="New York, NY" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                defaultValue="Experienced project manager with over 10 years in the construction industry, specializing in commercial buildings and infrastructure projects."
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Work Information</CardTitle>
              <CardDescription>Your work details and projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Project Manager" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Construction Management" />
              </div>
              <div className="space-y-2">
                <Label>Start Date</Label>
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>January 15, 2020</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Current Projects</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge>Downtown Office Tower</Badge>
                  <Badge>Community Center</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills & Certifications</CardTitle>
              <CardDescription>Your professional skills and certifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Project Management</Badge>
                  <Badge variant="outline">Budget Planning</Badge>
                  <Badge variant="outline">Resource Allocation</Badge>
                  <Badge variant="outline">Risk Assessment</Badge>
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">Contract Negotiation</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Certifications</Label>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">PMP Certification</span>
                    <span className="text-sm text-muted-foreground">2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">OSHA 30-Hour</span>
                    <span className="text-sm text-muted-foreground">2019</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">LEED Green Associate</span>
                    <span className="text-sm text-muted-foreground">2021</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

