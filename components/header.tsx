"use client"

import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"
import { Bell, LogOut, Search, UserCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { user, logout } = useAuth()
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "คำขอลาใหม่",
      description: "สมชาย ใจดี ส่งคำขอลาป่วย",
      time: "5 นาทีที่แล้ว",
      read: false,
    },
    {
      id: 2,
      title: "การประเมินผลงาน",
      description: "ถึงกำหนดประเมินผลงานประจำไตรมาส",
      time: "2 ชั่วโมงที่แล้ว",
      read: false,
    },
    {
      id: 3,
      title: "การฝึกอบรมใหม่",
      description: "มีหลักสูตรฝึกอบรมใหม่ที่เปิดให้ลงทะเบียน",
      time: "1 วันที่แล้ว",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="w-8"></div> {/* Spacer for mobile menu button */}
      <div className="flex items-center gap-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel>การแจ้งเตือน</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn("flex cursor-pointer flex-col items-start p-3", !notification.read && "bg-blue-50")}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex w-full justify-between">
                  <span className="font-medium">{notification.title}</span>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
                <span className="text-sm text-muted-foreground">{notification.description}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="@user" />
                <AvatarFallback>{user?.role === "hr" ? "HR" : "พน"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
              {user?.role === "hr" ? "ผู้ดูแลระบบ HR" : "พนักงาน"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>โปรไฟล์</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>ออกจากระบบ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
