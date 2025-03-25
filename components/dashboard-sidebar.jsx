"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  ClipboardList,
  HardHat,
  Home,
  LineChart,
  Settings,
  Truck,
  Users,
  AlertTriangle,
  Leaf,
  PenToolIcon as Tool,
  Package,
  HardHatIcon as UserHardHat,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  // Function to check if a path is active
  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Function to navigate and update the URL
  const handleNavigation = (path) => {
    router.push(path)
  }

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <Link href="/" className="flex items-center">
          <HardHat className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">SmartBuild</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/")} onClick={() => handleNavigation("/")}>
                  <Home />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/projects")} onClick={() => handleNavigation("/projects")}>
                  <ClipboardList />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/calendar")} onClick={() => handleNavigation("/calendar")}>
                  <Calendar />
                  <span>Schedule</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Monitoring</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible w-full">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton isActive={isActive("/resources")}>
                      <Truck />
                      <span>Resources</span>
                      <ChevronDown
                        className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180"
                        aria-hidden="true"
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          isActive={isActive("/resources/equipment")}
                          onClick={() => handleNavigation("/resources/equipment")}
                        >
                          <Tool className="h-4 w-4" />
                          <span>Equipment</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          isActive={isActive("/resources/materials")}
                          onClick={() => handleNavigation("/resources/materials")}
                        >
                          <Package className="h-4 w-4" />
                          <span>Materials</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          isActive={isActive("/resources/labor")}
                          onClick={() => handleNavigation("/resources/labor")}
                        >
                          <UserHardHat className="h-4 w-4" />
                          <span>Labor</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/risks")} onClick={() => handleNavigation("/risks")}>
                  <AlertTriangle />
                  <span>Risk Alerts</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/sustainability")}
                  onClick={() => handleNavigation("/sustainability")}
                >
                  <Leaf />
                  <span>Sustainability</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Reports</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/financial")} onClick={() => handleNavigation("/financial")}>
                  <BarChart3 />
                  <span>Financial</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={isActive("/analytics")} onClick={() => handleNavigation("/analytics")}>
                  <LineChart />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={isActive("/team")} onClick={() => handleNavigation("/team")}>
              <Users />
              <span>Team</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={isActive("/settings")} onClick={() => handleNavigation("/settings")}>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

