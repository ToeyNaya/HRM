"use client"

import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useEffect, useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import LoadingSpinner from "./ui/LoadingSpinner"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const [isRouteChanging, setIsRouteChanging] = useState(false)

  // ตรวจสอบการเข้าสู่ระบบ
  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login")
    }

    if (isAuthenticated && pathname === "/login") {
      router.push("/")
    }
  }, [isAuthenticated, pathname, router])

  // จัดการ Loading ตอนเปลี่ยนหน้า
  useEffect(() => {
    const handleStart = () => setIsRouteChanging(true)
    const handleStop = () => setIsRouteChanging(false)

    // Next.js App Router ไม่มี router.events ใน `next/navigation`
    // เราจำลองการจับ path change ด้วย pathname แทน
    setIsRouteChanging(true)
    const timer = setTimeout(() => setIsRouteChanging(false), 500) // ปรับ delay ได้

    return () => clearTimeout(timer)
  }, [pathname])

  if (pathname === "/login") {
    return (
      <>
        {isRouteChanging && <LoadingSpinner />}
        {children}
      </>
    )
  }

  if (!isAuthenticated) {
    return <>{isRouteChanging && <LoadingSpinner />}</>
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {isRouteChanging && <LoadingSpinner />}
      <Sidebar />
      <div className="flex flex-col flex-1 w-full md:w-[calc(100%-16rem)]">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
