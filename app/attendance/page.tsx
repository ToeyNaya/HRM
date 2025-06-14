import { HistoryTimeStamp } from "@/components/attendance/HistoryTimeStamp"
import { StampTime } from "@/components/attendance/StampTime"
import { SummaryStampTime } from "@/components/attendance/SummaryStampTime"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

export default function AttendancePage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">การลงเวลา</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <StampTime />
        <SummaryStampTime />
      </div>
      <HistoryTimeStamp />
    </div>
  )
}
