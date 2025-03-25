"use client"

import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { usePathname } from "next/navigation"

export function DashboardLayout({ children }) {
  const [user, setUser] = useState({
    name: "John Doe",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=32&width=32",
  })

  const pathname = usePathname()
  const [pageTitle, setPageTitle] = useState("Dashboard")

  // Update page title based on current path
  useEffect(() => {
    if (pathname === "/") {
      setPageTitle("Dashboard")
    } else if (pathname === "/projects") {
      setPageTitle("Projects")
    } else if (pathname === "/calendar") {
      setPageTitle("Schedule")
    } else if (pathname.startsWith("/resources")) {
      if (pathname === "/resources/equipment") {
        setPageTitle("Equipment Management")
      } else if (pathname === "/resources/materials") {
        setPageTitle("Materials Management")
      } else if (pathname === "/resources/labor") {
        setPageTitle("Labor Management")
      } else {
        setPageTitle("Resources")
      }
    } else if (pathname === "/risks") {
      setPageTitle("Risk Alerts")
    } else if (pathname === "/sustainability") {
      setPageTitle("Sustainability")
    } else if (pathname === "/financial") {
      setPageTitle("Financial Reports")
    } else if (pathname === "/analytics") {
      setPageTitle("Analytics")
    } else if (pathname === "/team") {
      setPageTitle("Team")
    } else if (pathname === "/settings") {
      setPageTitle("Settings")
    } else if (pathname === "/profile") {
      setPageTitle("Profile")
    }
  }, [pathname])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex flex-col flex-1">
          <DashboardHeader user={user} pageTitle={pageTitle} />
          <main className="flex-1 p-4 md:p-6 bg-background">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

