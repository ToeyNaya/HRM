"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"
import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  Menu,
  Users,
  GraduationCap,
  ClipboardCheck,
  X,
  Settings,
  LogOut,
  UserCircle,
  Bell,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

// เมนูสำหรับ HR
const hrMenuItems = [
  {
    title: "แดชบอร์ด",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "พนักงาน",
    href: "/employees",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "การลงเวลา",
    href: "/attendance",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "การลา",
    href: "/leave",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "เงินเดือน",
    href: "/payroll",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "การประเมินผล",
    href: "/performance",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "การฝึกอบรม",
    href: "/training",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "รายงาน",
    href: "/reports",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "การตั้งค่า",
    href: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

// เมนูสำหรับพนักงานทั่วไป
const employeeMenuItems = [
  {
    title: "แดชบอร์ด",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "โปรไฟล์",
    href: "/profile",
    icon: <UserCircle className="h-5 w-5" />,
  },
  {
    title: "การลงเวลา",
    href: "/attendance",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "การลา",
    href: "/leave",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "เงินเดือน",
    href: "/payroll",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "การประเมินผล",
    href: "/performance",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "การฝึกอบรม",
    href: "/training",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "การแจ้งเตือน",
    href: "/notifications",
    icon: <Bell className="h-5 w-5" />,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  // เลือกเมนูตามบทบาทของผู้ใช้
  const menuItems = user?.role === "hr" ? hrMenuItems : employeeMenuItems

  return (
    <>
      <button className="fixed left-4 top-4 z-50 block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-blue-900 text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-center border-b border-blue-800">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">ระบบ HRM</span>
          </Link>
        </div>

        {user && (
          <div className="border-b border-blue-800 p-4">
            <div className="flex items-center gap-x-5 mx-2">
            <Avatar className="h-14 w-14">
                <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="@user" />
                <AvatarFallback>{user?.role === "hr" ? "HR" : "พน"}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-blue-200">{user.role === "hr" ? "ผู้ดูแลระบบ HR" : "พนักงาน"}</div>
              </div>
            </div>

          </div>
        )}

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href ? "bg-white text-black" : "text-blue-100 hover:bg-blue-800",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </Link>
            ))}

            <button
              className="flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-800"
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3">ออกจากระบบ</span>
            </button>
          </div>
        </nav>
      </div>
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
