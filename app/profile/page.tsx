"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Download, FilePenLine, FileText, Mail, MapPin, Phone, User } from "lucide-react"
import { useState } from "react"
import { ProfileDetail } from "@/components/profile/ProfileDetail"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState('personal');
  const handleChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">โปรไฟล์ของฉัน</h1>
      <div className="grid gap-5 md:grid-cols-3">
        <ProfileDetail />
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>ข้อมูลส่วนตัว</CardTitle>
            <CardDescription>ข้อมูลส่วนตัวและประวัติการทำงาน</CardDescription>
          </CardHeader>
          <CardContent className="">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              {/* Dropdown สำหรับมือถือ */}
              <div className="mb-4 sm:hidden">
                <div className="flex gap-2">
                  <Select value={selectedTab} onValueChange={handleChange}>
                    <SelectTrigger className="w-[180px] focus:ring-offset-0 focus:ring-0">
                      <SelectValue placeholder="ข้อมูลส่วนตัว" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">ข้อมูลส่วนตัว</SelectItem>
                      <SelectItem value="work">ประวัติการทำงาน</SelectItem>
                      <SelectItem value="skills">ทักษะและความสามารถ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* แสดงเป็นแท็บในขนาดหน้าจอใหญ่ */}
              <TabsList className="hidden sm:inline-flex justify-start w-auto mb-4">
                <TabsTrigger value="personal" onClick={() => setSelectedTab('personal')}>
                  ข้อมูลส่วนตัว
                </TabsTrigger>
                <TabsTrigger value="work" onClick={() => setSelectedTab('work')}>
                  ประวัติการทำงาน
                </TabsTrigger>
               
              </TabsList>

              <TabsContent value="personal" className="space-y-4 px-2 sm:px-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">ชื่อ-นามสกุล</h3>
                    <p className="text-sm">สมชาย ใจดี</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">วันเกิด</h3>
                    <p className="text-sm">15 มกราคม 2530</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">เพศ</h3>
                    <p className="text-sm">ชาย</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">สถานภาพ</h3>
                    <p className="text-sm">สมรส</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">ที่อยู่</h3>
                    <p className="text-sm">123/45 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">เบอร์โทรศัพท์</h3>
                    <p className="text-sm">089-123-4567</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">อีเมล</h3>
                    <p className="text-sm">somchai@example.com</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">บัญชีธนาคาร</h3>
                    <p className="text-sm">ธนาคารกรุงเทพ สาขาสุขุมวิท เลขที่บัญชี 123-4-56789-0</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="work" className="space-y-4">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">ผู้จัดการฝ่ายขาย</h3>
                        <p className="text-sm text-muted-foreground">บริษัท ABC จำกัด</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2565 - ปัจจุบัน</div>
                    </div>
                    <p className="mt-2 text-sm">รับผิดชอบการบริหารทีมขาย วางแผนกลยุทธ์การขาย และพัฒนาความสัมพันธ์กับลูกค้า</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">พนักงานขายอาวุโส</h3>
                        <p className="text-sm text-muted-foreground">บริษัท XYZ จำกัด</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2562 - 2565</div>
                    </div>
                    <p className="mt-2 text-sm">ดูแลลูกค้าองค์กร วางแผนการขาย และนำเสนอผลิตภัณฑ์ให้กับลูกค้า</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">พนักงานขาย</h3>
                        <p className="text-sm text-muted-foreground">บริษัท DEF จำกัด</p>
                      </div>
                      <div className="text-sm text-muted-foreground">2560 - 2562</div>
                    </div>
                    <p className="mt-2 text-sm">ติดต่อลูกค้า นำเสนอผลิตภัณฑ์ และให้คำปรึกษาเกี่ยวกับผลิตภัณฑ์</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">การบริหารทีม</div>
                      <div className="text-sm font-medium">90%</div>
                    </div>
                    <Progress value={90} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">การเจรจาต่อรอง</div>
                      <div className="text-sm font-medium">85%</div>
                    </div>
                    <Progress value={85} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">การนำเสนอ</div>
                      <div className="text-sm font-medium">80%</div>
                    </div>
                    <Progress value={80} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">การวิเคราะห์ตลาด</div>
                      <div className="text-sm font-medium">75%</div>
                    </div>
                    <Progress value={75} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">ภาษาอังกฤษ</div>
                      <div className="text-sm font-medium">70%</div>
                    </div>
                    <Progress value={70} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 text-sm font-medium">ใบรับรองและประกาศนียบัตร</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-800" />
                        <span className="text-sm">ประกาศนียบัตรการบริหารการขาย</span>
                      </div>
                      <Button variant="outline" size="sm" className="flex gap-1">
                        <Download className="h-3 w-3" />
                        <span className="text-xs">ดาวน์โหลด</span>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-800" />
                        <span className="text-sm">ประกาศนียบัตรการเจรจาต่อรองขั้นสูง</span>
                      </div>
                      <Button variant="outline" size="sm" className="flex gap-1">
                        <Download className="h-3 w-3" />
                        <span className="text-xs">ดาวน์โหลด</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>วันลาคงเหลือ</CardTitle>
            <CardDescription>จำนวนวันลาคงเหลือในปีนี้</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">ลาพักร้อน</div>
                <div className="mt-1 flex items-baseline">
                  <div className="text-2xl font-bold">8</div>
                  <div className="ml-1 text-sm text-muted-foreground">/ 15 วัน</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-800" style={{ width: "53%" }}></div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">ลาป่วย</div>
                <div className="mt-1 flex items-baseline">
                  <div className="text-2xl font-bold">28</div>
                  <div className="ml-1 text-sm text-muted-foreground">/ 30 วัน</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-800" style={{ width: "93%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>กำหนดการที่จะมาถึง</CardTitle>
            <CardDescription>กิจกรรมและกำหนดการสำคัญที่กำลังจะมาถึง</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Calendar className="h-5 w-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium">การประเมินผลงานประจำไตรมาส</h3>
                  <p className="text-sm text-muted-foreground">30 มิถุนายน 2567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium">การฝึกอบรม: ทักษะการเป็นผู้นำ</h3>
                  <p className="text-sm text-muted-foreground">15 กรกฎาคม 2567</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
