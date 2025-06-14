"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, BookUser, CalendarIcon, Contact, Plus, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { set } from "date-fns"

export default function AddEmployeePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined)
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [month, setMonth] = useState(new Date());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // จำลองการส่งข้อมูล
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "เพิ่มพนักงานสำเร็จ",
        description: "ข้อมูลพนักงานถูกบันทึกเรียบร้อยแล้ว",
      })

      router.push("/employees")
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถเพิ่มพนักงานได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">เพิ่มพนักงานใหม่</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>รูปโปรไฟล์</CardTitle>
              <CardDescription>อัพโหลดรูปโปรไฟล์ของพนักงาน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="text-sm text-gray-500">คลิกเพื่ออัพโหลดรูป</p>
                    <p className="text-xs text-gray-400">PNG, JPG (สูงสุด 2MB)</p>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm">
                  เลือกรูปภาพ
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between bg-blue-600 rounded-t-lg mb-2">
              <div className="flex flex-col gap-y-2">
                <CardTitle className="text-white">ข้อมูลพนักงาน</CardTitle>
                <CardDescription className="text-blue-200">กรอกข้อมูลพื้นฐานของพนักงาน</CardDescription>
              </div>
              <Contact className="h-10 w-10 text-white" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="employeeId">รหัสพนักงาน</Label>
                  <Input id="employeeId" placeholder="รหัสพนักงาน" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">วันที่เริ่มงาน</Label>
                  <Input id="startDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">ชื่อ</Label>
                  <Input id="firstName" placeholder="ชื่อ" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">นามสกุล</Label>
                  <Input id="lastName" placeholder="นามสกุล" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">ตำแหน่ง</Label>
                  <Input id="position" placeholder="ตำแหน่ง" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">แผนก</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="เลือกแผนก" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hr">ฝ่ายบุคคล</SelectItem>
                      <SelectItem value="marketing">ฝ่ายการตลาด</SelectItem>
                      <SelectItem value="sales">ฝ่ายขาย</SelectItem>
                      <SelectItem value="it">ฝ่ายไอที</SelectItem>
                      <SelectItem value="accounting">ฝ่ายบัญชี</SelectItem>
                      <SelectItem value="production">ฝ่ายผลิต</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">อีเมล</Label>
                  <Input id="email" type="email" placeholder="อีเมล" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                  <Input id="phone" placeholder="เบอร์โทรศัพท์" required />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="address">ที่อยู่</Label>
                <Textarea id="address" placeholder="ที่อยู่" rows={3} />
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">วันเกิด (ค.ศ.)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        ref={triggerRef}
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {birthDate ? birthDate.toLocaleDateString("en-CA") : "เลือกวันเกิด"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2">

                      {/* Year selector */}
                      <div className="mb-1 flex justify-center">
                        <select
                          className="border rounded px-2 py-1 text-sm"
                          value={month.getFullYear()}
                          onChange={(e) => {
                            const newYear = parseInt(e.target.value);
                            const newDate = new Date(month.setFullYear(newYear));
                            setMonth(newDate);
                          }}
                        >
                          {Array.from({ length: 100 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <Calendar
                        mode="single"
                        selected={birthDate}
                        onSelect={(date) => {
                          setBirthDate(date);
                          triggerRef.current?.click();
                        }}
                        month={month}
                        onMonthChange={setMonth}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">เพศ</Label>
                  <Select>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="เลือกเพศ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">ชาย</SelectItem>
                      <SelectItem value="female">หญิง</SelectItem>
                      <SelectItem value="other">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">เงินเดือน</Label>
                  <Input id="salary" type="number" placeholder="เงินเดือน" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employmentType">ประเภทการจ้าง</Label>
                  <Select>
                    <SelectTrigger id="employmentType">
                      <SelectValue placeholder="เลือกประเภทการจ้าง" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">พนักงานประจำ</SelectItem>
                      <SelectItem value="parttime">พนักงานพาร์ทไทม์</SelectItem>
                      <SelectItem value="contract">พนักงานสัญญาจ้าง</SelectItem>
                      <SelectItem value="probation">พนักงานทดลองงาน</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>เอกสารประกอบ</Label>
                <div className="rounded-lg border border-dashed p-4">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="text-sm text-gray-500">คลิกเพื่ออัพโหลดเอกสาร</p>
                    <p className="text-xs text-gray-400">PDF, DOC, DOCX (สูงสุด 10MB)</p>
                    <Button type="button" variant="outline" size="sm" className="mt-2">
                      <Plus className="mr-2 h-4 w-4" />
                      เพิ่มเอกสาร
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                ยกเลิก
              </Button>
              <Button type="submit" className="bg-blue-800 hover:bg-blue-900" disabled={isLoading}>
                {isLoading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  )
}
