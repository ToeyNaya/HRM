"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, ArrowLeft, Upload, Plus, X, Info } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, addDays, isWeekend, isBefore, isSameDay } from "date-fns"
import { th } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RequestLeavePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [leaveType, setLeaveType] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [reason, setReason] = useState("")
  const [documents, setDocuments] = useState<{ name: string; size: string }[]>([])
  const [leaveDays, setLeaveDays] = useState(0)
  const [remainingDays, setRemainingDays] = useState({
    annual: 8,
    sick: 28,
    personal: 5,
    other: 2,
  })

  // คำนวณจำนวนวันลาเมื่อวันที่เปลี่ยนแปลง
  useEffect(() => {
    if (startDate && endDate) {
      // ตรวจสอบว่าวันที่สิ้นสุดต้องไม่น้อยกว่าวันที่เริ่ม
      if (isBefore(endDate, startDate)) {
        setEndDate(startDate)
        return
      }

      // คำนวณจำนวนวันทำงาน (ไม่รวมวันหยุดสุดสัปดาห์)
      let days = 0
      let currentDate = startDate

      while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
        if (!isWeekend(currentDate)) {
          days++
        }
        currentDate = addDays(currentDate, 1)
      }

      setLeaveDays(days)
    } else {
      setLeaveDays(0)
    }
  }, [startDate, endDate])

  // ตรวจสอบว่าจำนวนวันลาเกินจำนวนวันที่เหลือหรือไม่
  const isExceedingLimit = () => {
    if (!leaveType || !leaveDays) return false

    switch (leaveType) {
      case "annual":
        return leaveDays > remainingDays.annual
      case "sick":
        return leaveDays > remainingDays.sick
      case "personal":
        return leaveDays > remainingDays.personal
      case "other":
        return leaveDays > remainingDays.other
      default:
        return false
    }
  }

  // จำลองการอัพโหลดไฟล์
  const handleFileUpload = () => {
    const newDocument = {
      name: `เอกสาร_${documents.length + 1}.pdf`,
      size: `${Math.floor(Math.random() * 1000) + 100} KB`,
    }
    setDocuments([...documents, newDocument])
  }

  // ลบเอกสารที่อัพโหลด
  const handleRemoveDocument = (index: number) => {
    const newDocuments = [...documents]
    newDocuments.splice(index, 1)
    setDocuments(newDocuments)
  }

  // ส่งคำขอลา
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!leaveType || !startDate || !endDate || !reason) {
      toast({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        description: "กรุณากรอกข้อมูลที่จำเป็นทั้งหมด",
        variant: "destructive",
      })
      return
    }

    // ตรวจสอบว่าจำนวนวันลาเกินจำนวนวันที่เหลือหรือไม่
    if (isExceedingLimit()) {
      toast({
        title: "จำนวนวันลาเกินกำหนด",
        description: "จำนวนวันลาที่ขอเกินจำนวนวันลาคงเหลือของคุณ",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // จำลองการส่งข้อมูล
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "ส่งคำขอลาสำเร็จ",
        description: "คำขอลาของคุณถูกส่งเรียบร้อยแล้ว รอการอนุมัติ",
      })

      router.push("/leave")
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งคำขอลาได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // แสดงจำนวนวันลาคงเหลือตามประเภทการลา
  const getRemainingDays = () => {
    if (!leaveType) return null

    let remaining = 0
    let total = 0

    switch (leaveType) {
      case "annual":
        remaining = remainingDays.annual
        total = 15
        break
      case "sick":
        remaining = remainingDays.sick
        total = 30
        break
      case "personal":
        remaining = remainingDays.personal
        total = 10
        break
      case "other":
        remaining = remainingDays.other
        total = 5
        break
    }

    return (
      <div className="text-sm text-muted-foreground">
        วันลาคงเหลือ: <span className="font-medium">{remaining}</span> / {total} วัน
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">ส่งคำขอลา</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>แบบฟอร์มขอลา</CardTitle>
            <CardDescription>กรอกข้อมูลเพื่อส่งคำขอลา</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="leaveType">
                  ประเภทการลา <span className="text-red-500">*</span>
                </Label>
                <Select value={leaveType} onValueChange={setLeaveType} required>
                  <SelectTrigger id="leaveType" className="focus:ring-0">
                    <SelectValue placeholder="เลือกประเภทการลา" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">ลาพักร้อน</SelectItem>
                    <SelectItem value="sick">ลาป่วย</SelectItem>
                    <SelectItem value="personal">ลากิจ</SelectItem>
                    <SelectItem value="other">ลาอื่นๆ</SelectItem>
                  </SelectContent>
                </Select>
                {getRemainingDays()}
              </div>

              <div className="space-y-2">
                <Label>จำนวนวันลา</Label>
                <div className="flex h-10 items-center rounded-md border border-input bg-background px-3 text-sm">
                  {leaveDays > 0 ? `${leaveDays} วัน` : "กรุณาเลือกวันที่"}
                </div>
                {isExceedingLimit() && <p className="text-sm text-red-500">จำนวนวันลาเกินจำนวนวันลาคงเหลือของคุณ</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">
                  วันที่เริ่มลา <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP", { locale: th }) : "เลือกวันที่"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      disabled={(date) => isWeekend(date) || isBefore(date, new Date())}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">
                  วันที่สิ้นสุด <span className="text-red-500">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                      disabled={!startDate}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP", { locale: th }) : "เลือกวันที่"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                      disabled={(date) =>
                        isWeekend(date) || (startDate ? isBefore(date, startDate) : false) || isBefore(date, new Date())
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">
                เหตุผลการลา <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="reason"
                placeholder="ระบุเหตุผลการลา"
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </div>

            {leaveType === "sick" && (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>หมายเหตุ</AlertTitle>
                <AlertDescription>กรณีลาป่วยตั้งแต่ 3 วันขึ้นไป กรุณาแนบใบรับรองแพทย์</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label>เอกสารแนบ (ถ้ามี)</Label>
              <div className="rounded-lg border border-dashed p-4">
                {documents.length > 0 ? (
                  <div className="space-y-2">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-2">
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4 text-blue-800" />
                          <span className="text-sm">{doc.name}</span>
                          <span className="text-xs text-muted-foreground">({doc.size})</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleRemoveDocument(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" className="mt-2" onClick={handleFileUpload}>
                      <Plus className="mr-2 h-4 w-4" />
                      เพิ่มเอกสาร
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-4">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="text-sm text-gray-500">คลิกเพื่ออัพโหลดเอกสาร</p>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX, JPG (สูงสุด 5MB)</p>
                    <Button type="button" variant="outline" size="sm" className="mt-2" onClick={handleFileUpload}>
                      <Plus className="mr-2 h-4 w-4" />
                      เพิ่มเอกสาร
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-6">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              ยกเลิก
            </Button>
            <Button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900"
              disabled={isLoading || !leaveType || !startDate || !endDate || !reason || isExceedingLimit()}
            >
              {isLoading ? "กำลังส่งคำขอ..." : "ส่งคำขอลา"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
