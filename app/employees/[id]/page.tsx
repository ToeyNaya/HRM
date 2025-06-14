"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Download, FileText, Mail, MapPin, Phone, User, Building, Edit } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"

// ข้อมูลจำลองสำหรับพนักงาน
const employeeData = {
  id: "EMP001",
  name: "สมชาย ใจดี",
  position: "ผู้จัดการฝ่ายขาย",
  department: "ฝ่ายขาย",
  email: "somchai@example.com",
  phone: "089-123-4567",
  address: "123/45 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
  birthdate: "15 มกราคม 2530",
  gender: "ชาย",
  status: "ทำงาน",
  hireDate: "1 มิถุนายน 2560",
  salary: "45,000 บาท",
  bankAccount: "ธนาคารกรุงเทพ สาขาสุขุมวิท เลขที่บัญชี 123-4-56789-0",
  education: [
    {
      degree: "ปริญญาโท",
      field: "บริหารธุรกิจ",
      institution: "มหาวิทยาลัยจุฬาลงกรณ์",
      year: "2555",
    },
    {
      degree: "ปริญญาตรี",
      field: "การตลาด",
      institution: "มหาวิทยาลัยธรรมศาสตร์",
      year: "2552",
    },
  ],
  experience: [
    {
      position: "ผู้จัดการฝ่ายขาย",
      company: "บริษัท ABC จำกัด",
      period: "2565 - ปัจจุบัน",
      description: "รับผิดชอบการบริหารทีมขาย วางแผนกลยุทธ์การขาย และพัฒนาความสัมพันธ์กับลูกค้า",
    },
    {
      position: "พนักงานขายอาวุโส",
      company: "บริษัท XYZ จำกัด",
      period: "2562 - 2565",
      description: "ดูแลลูกค้าองค์กร วางแผนการขาย และนำเสนอผลิตภัณฑ์ให้กับลูกค้า",
    },
    {
      position: "พนักงานขาย",
      company: "บริษัท DEF จำกัด",
      period: "2560 - 2562",
      description: "ติดต่อลูกค้า นำเสนอผลิตภัณฑ์ และให้คำปรึกษาเกี่ยวกับผลิตภัณฑ์",
    },
  ],
  skills: [
    { name: "การบริหารทีม", level: 90 },
    { name: "การเจรจาต่อรอง", level: 85 },
    { name: "การนำเสนอ", level: 80 },
    { name: "การวิเคราะห์ตลาด", level: 75 },
    { name: "ภาษาอังกฤษ", level: 70 },
  ],
  certificates: [
    { name: "ประกาศนียบัตรการบริหารการขาย", issuer: "สถาบันพัฒนาผู้บริหาร", year: "2564" },
    { name: "ประกาศนียบัตรการเจรจาต่อรองขั้นสูง", issuer: "สมาคมการขายแห่งประเทศไทย", year: "2563" },
  ],
  performance: [
    { period: "ไตรมาส 2/2567", score: 85, rating: "ดีมาก" },
    { period: "ไตรมาส 1/2567", score: 80, rating: "ดีมาก" },
    { period: "ไตรมาส 4/2566", score: 75, rating: "ดี" },
  ],
  leave: {
    annual: { used: 7, total: 15 },
    sick: { used: 2, total: 30 },
    personal: { used: 5, total: 10 },
  },
}

export default function EmployeeDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { user } = useAuth()
  const isHR = user?.role === "hr"

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">ข้อมูลพนักงาน</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="@user" />
                <AvatarFallback className="text-lg">สช</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">{employeeData.name}</h2>
              <p className="text-sm text-muted-foreground">{employeeData.position}</p>
              <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">{employeeData.status}</Badge>

              <div className="mt-6 w-full space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{employeeData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{employeeData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">กรุงเทพมหานคร, ประเทศไทย</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">รหัสพนักงาน: {employeeData.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">แผนก: {employeeData.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">เริ่มงาน: {employeeData.hireDate}</span>
                </div>
              </div>

              {isHR && (
                <Button className="mt-6 w-full bg-blue-800 hover:bg-blue-900">
                  <Edit className="mr-2 h-4 w-4" />
                  แก้ไขข้อมูล
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>ข้อมูลพนักงาน</CardTitle>
            <CardDescription>ข้อมูลส่วนตัวและประวัติการทำงาน</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">ข้อมูลส่วนตัว</TabsTrigger>
                <TabsTrigger value="work">ประวัติการทำงาน</TabsTrigger>
                <TabsTrigger value="skills">ทักษะและความสามารถ</TabsTrigger>
                <TabsTrigger value="performance">ผลการปฏิบัติงาน</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">ชื่อ-นามสกุล</h3>
                    <p className="text-sm">{employeeData.name}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">วันเกิด</h3>
                    <p className="text-sm">{employeeData.birthdate}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">เพศ</h3>
                    <p className="text-sm">{employeeData.gender}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">ที่อยู่</h3>
                    <p className="text-sm">{employeeData.address}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">เบอร์โทรศัพท์</h3>
                    <p className="text-sm">{employeeData.phone}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">อีเมล</h3>
                    <p className="text-sm">{employeeData.email}</p>
                  </div>
                  {isHR && (
                    <>
                      <div>
                        <h3 className="mb-2 text-sm font-medium">เงินเดือน</h3>
                        <p className="text-sm">{employeeData.salary}</p>
                      </div>
                      <div>
                        <h3 className="mb-2 text-sm font-medium">บัญชีธนาคาร</h3>
                        <p className="text-sm">{employeeData.bankAccount}</p>
                      </div>
                    </>
                  )}
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">ประวัติการศึกษา</h3>
                  <div className="space-y-4">
                    {employeeData.education.map((edu, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">
                              {edu.degree} สาขา{edu.field}
                            </h4>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          </div>
                          <div className="text-sm text-muted-foreground">จบการศึกษาปี {edu.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="work" className="space-y-4">
                <div className="space-y-4">
                  {employeeData.experience.map((exp, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{exp.position}</h3>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">{exp.period}</div>
                      </div>
                      <p className="mt-2 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-4">
                <div className="space-y-4">
                  {employeeData.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="mb-1 flex items-center justify-between">
                        <div className="text-sm font-medium">{skill.name}</div>
                        <div className="text-sm font-medium">{skill.level}%</div>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 w-full bg-gray-200"
                        indicatorClassName="bg-blue-800"
                      />
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">ใบรับรองและประกาศนียบัตร</h3>
                  <div className="space-y-2">
                    {employeeData.certificates.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-800" />
                          <div>
                            <span className="text-sm">{cert.name}</span>
                            <p className="text-xs text-muted-foreground">
                              {cert.issuer}, {cert.year}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex gap-1">
                          <Download className="h-3 w-3" />
                          <span className="text-xs">ดูเอกสาร</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-4">
                <div className="space-y-4">
                  {employeeData.performance.map((perf, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">ผลการประเมิน {perf.period}</h3>
                          <p className="text-sm text-muted-foreground">คะแนน: {perf.score}/100</p>
                        </div>
                        <Badge
                          className={
                            perf.rating === "ดีมาก"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                        >
                          {perf.rating}
                        </Badge>
                      </div>
                      <Progress
                        value={perf.score}
                        className="h-2 w-full bg-gray-200"
                        indicatorClassName="bg-blue-800"
                      />
                      <div className="mt-4 flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => router.push(`/performance/${index + 1}`)}
                        >
                          <FileText className="h-3 w-3" />
                          <span className="text-xs">ดูรายละเอียด</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">วันลาคงเหลือ</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">ลาพักร้อน</div>
                      <div className="mt-1 flex items-baseline">
                        <div className="text-2xl font-bold">{employeeData.leave.annual.used}</div>
                        <div className="ml-1 text-sm text-muted-foreground">/ {employeeData.leave.annual.total} วัน</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-800"
                          style={{
                            width: `${(employeeData.leave.annual.used / employeeData.leave.annual.total) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">ลาป่วย</div>
                      <div className="mt-1 flex items-baseline">
                        <div className="text-2xl font-bold">{employeeData.leave.sick.used}</div>
                        <div className="ml-1 text-sm text-muted-foreground">/ {employeeData.leave.sick.total} วัน</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-800"
                          style={{ width: `${(employeeData.leave.sick.used / employeeData.leave.sick.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">ลากิจ</div>
                      <div className="mt-1 flex items-baseline">
                        <div className="text-2xl font-bold">{employeeData.leave.personal.used}</div>
                        <div className="ml-1 text-sm text-muted-foreground">
                          / {employeeData.leave.personal.total} วัน
                        </div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-800"
                          style={{
                            width: `${(employeeData.leave.personal.used / employeeData.leave.personal.total) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
