"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarPlus, Plus } from "lucide-react"
import { HeaderCard } from "@/components/ui/HeaderCard"
import { RemainingLeave } from "@/components/leave/RemainingLeave"
import { HistoryLeave } from "@/components/leave/HistoryLeave"

export default function LeavePage() {
  const router = useRouter()

  // ฟังก์ชันสำหรับส่งคำขอลา
  const handleRequestLeave = () => {
    router.push("/leave/request")
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">การลา</h1>
        <Button className="bg-blue-800 hover:bg-blue-900" onClick={handleRequestLeave}>
          <Plus className="mr-2 h-4 w-4" /> ส่งคำขอลา
        </Button>
      </div>
      <RemainingLeave />
      <HistoryLeave />
    </div>
  )
}
