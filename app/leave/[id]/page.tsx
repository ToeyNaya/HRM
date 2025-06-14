"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, FileText, ArrowLeft, Download, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-context"

// ข้อมูลจำลองสำหรับการลา
const leaveData = {
  id: "1",
  type: "ลาพักร้อน",
  startDate: "15/07/2567",
  endDate: "20/07/2567",
  days: 5,
  reason: "ท่องเที่ยวต่างจังหวัด",
  status: "รออนุมัติ",
  requestDate: "10/06/2567",
  approver: "นายวิชัย ผู้จัดการ",
  documents: [
    { name: "ใบคำขอลา.pdf", size: "245 KB" },
    { name: "กำหนดการเดินทาง.pdf", size: "512 KB" },
  ],
  history: [
    { date: "10/06/2567 09:30", action: "ส่งคำขอลา", by: "สมชาย ใจดี" },
    { date: "10/06/2567 14:45", action: "หัวหน้าแผนกอนุมัติ", by: "นางสาวสมศรี หัวหน้าแผนก" },
    { date: "รออนุมัติ", action: "รออนุมัติจากผู้จัดการ", by: "นายวิชัย ผู้จัดการ" },
  ],
}

export default function LeaveDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { user } = useAuth()
  const [status, setStatus] = useState(leaveData.status)

  const handleApprove = () => {
    setStatus("อนุมัติแล้ว")
    toast({
      title: "อนุมัติคำขอลาสำเร็จ",
      description: "คำขอลาได้รับการอนุมัติแล้ว",
    })
  }

  const handleReject = () => {
    setStatus("ไม่อนุมัติ")
    toast({
      title: "ปฏิเสธคำขอลาสำเร็จ",
      description: "คำขอลาถูกปฏิเสธแล้ว",
    })
  }

  const handleCancel = () => {
    setStatus("ยกเลิก")
    toast({
      title: "ยกเลิกคำขอลาสำเร็จ",
      description: "คำขอลาถูกยกเลิกแล้ว",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "รออนุมัติ":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>
      case "อนุมัติแล้ว":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>
      case "ไม่อนุมัติ":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>
      case "ยกเลิก":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>
      default:
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">รายละเอียดการลา</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>คำขอลา {leaveData.type}</CardTitle>
              <CardDescription>รหัสคำขอ: #{params.id}</CardDescription>
            </div>
            {getStatusBadge(status)}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">ประเภทการลา</p>
              <p>{leaveData.type}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">วันที่ยื่นคำขอ</p>
              <p>{leaveData.requestDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">วันที่เริ่มลา</p>
              <p>{leaveData.startDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">วันที่สิ้นสุด</p>
              <p>{leaveData.endDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">จำนวนวัน</p>
              <p>{leaveData.days} วัน</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">ผู้อนุมัติ</p>
              <p>{leaveData.approver}</p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">เหตุผลการลา</p>
            <p>{leaveData.reason}</p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">เอกสารแนบ</h3>
            <div className="space-y-2">
              {leaveData.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-800" />
                    <span className="text-sm">{doc.name}</span>
                    <span className="text-xs text-muted-foreground">({doc.size})</span>
                  </div>
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <Download className="h-3 w-3" />
                    <span className="text-xs">ดาวน์โหลด</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">ประวัติการดำเนินการ</h3>
            <div className="space-y-4">
              {leaveData.history.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative mt-0.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      {index === 0 ? (
                        <Calendar className="h-3 w-3 text-blue-800" />
                      ) : index === leaveData.history.length - 1 ? (
                        <Clock className="h-3 w-3 text-blue-800" />
                      ) : (
                        <CheckCircle className="h-3 w-3 text-blue-800" />
                      )}
                    </div>
                    {index < leaveData.history.length - 1 && (
                      <div className="absolute bottom-0 left-1/2 top-6 w-px -translate-x-1/2 bg-gray-200" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{item.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.date} โดย {item.by}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t p-6">
          {user?.role === "hr" && status === "รออนุมัติ" ? (
            <>
              <Button className="bg-green-600 hover:bg-green-700" onClick={handleApprove}>
                <CheckCircle className="mr-2 h-4 w-4" />
                อนุมัติ
              </Button>
              <Button variant="destructive" onClick={handleReject}>
                <XCircle className="mr-2 h-4 w-4" />
                ไม่อนุมัติ
              </Button>
            </>
          ) : user?.role === "employee" && status === "รออนุมัติ" ? (
            <Button variant="destructive" onClick={handleCancel}>
              ยกเลิกคำขอ
            </Button>
          ) : null}
          <Button variant="outline" onClick={() => router.back()}>
            กลับ
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
