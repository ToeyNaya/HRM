"use client"

import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Mail, MapPin, Phone, User, Building, Edit } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"

export default function EmployeeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { user } = useAuth()
  const isHR = user?.role === "hr"

  // Use React.use() to unwrap the params Promise
  const { id } = use(params)

  // State สำหรับเก็บข้อมูลพนักงาน
  const [employeeData, setEmployeeData] = useState<any>(null)
  interface Education {
    degree: string
    field: string
    institution: string
    year: number
  }

  const [educationData, setEducationData] = useState<Education[] | null>(null)
  interface WorkExperience {
    position: string
    company: string
    period: string
    description: string
  }

  const [workExperienceData, setWorkExperienceData] = useState<WorkExperience[] | null>(null)
  interface LeaveRequest {
    leaveType: string;
    startDate: string;
    endDate: string;
    status: string;
    reason: string;
    leaveDaysUsed?: number; // เพิ่มฟิลด์นี้เพื่อคำนวณวันลาในแต่ละคำขอลา
  }

  interface LeaveSummary {
    annual: { used: number; count: number, maxCount: number };
    sick: { used: number; count: number, maxCount: number };
    personal: { used: number; count: number, maxCount: number };
    other: { used: number; count: number, maxCount: number };
  }

  const [leaveRequestsData, setLeaveRequestsData] = useState<LeaveRequest[] | null>(null)
  const [leaveSummary, setLeaveSummary] = useState<LeaveSummary | null>(null)
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const calculateWorkExperience = (hireDate: string) => {
    const hireDateObj = new Date(hireDate);
    const currentDate = new Date();

    // คำนวณระยะเวลา
    let years = currentDate.getFullYear() - hireDateObj.getFullYear();
    let months = currentDate.getMonth() - hireDateObj.getMonth();

    // ถ้าหากเดือนในปีนี้ยังไม่ครบ
    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} ปี ${months} เดือน`;
  };

  const extractProvinceAndCountry = (address: string) => {
    // แยกข้อมูลที่อยู่ตามเครื่องหมาย ',' และดึงจังหวัดและประเทศ
    const addressParts = address.split(", ");
    const province = addressParts[addressParts.length - 3]; // จังหวัด
    const country = addressParts[addressParts.length - 2]; // ประเทศ
    return `${province}, ${country}`;
  };

  const calculateAge = (birthDate: string) => {
    const birthDateObj = new Date(birthDate); // แปลงวันที่เกิดให้เป็น Date object
    const currentDate = new Date(); // วันที่ปัจจุบัน

    let years = currentDate.getFullYear() - birthDateObj.getFullYear();
    let months = currentDate.getMonth() - birthDateObj.getMonth();
    let days = currentDate.getDate() - birthDateObj.getDate();

    // ถ้าเดือนปัจจุบันยังไม่ครบปี
    if (months < 0) {
      years--;
      months += 12; // ปรับเดือนให้ถูกต้อง
    }

    // ถ้าวันปัจจุบันยังไม่ครบวันในเดือน
    if (days < 0) {
      months--;
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0); // หาวันสุดท้ายของเดือนที่แล้ว
      days += lastMonth.getDate(); // หาค่าจำนวนวันในเดือนที่แล้ว
    }

    return `${years} ปี ${months} เดือน`;
  };

  const calculateLeaveDays = (startDate: string, endDate: string): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1; // คำนวณวันรวม
  };


  const fetchEmployeeData = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/api/emp/${id}`);
      const data = await res.json();
      if (res.ok) {
        setEmployeeData(data.data);
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const fetchEducationData = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/api/edu/${id}`);
      const data = await res.json();
      if (res.ok) {
        setEducationData(data.data);
      }
    } catch (error) {
      console.error("Error fetching education data:", error);
    }
  };

  const fetchWorkExperienceData = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/api/work/${id}`);
      const data = await res.json();
      if (res.ok) {
        setWorkExperienceData(data.data);
      }
    } catch (error) {
      console.error("Error fetching work experience data:", error);
    }
  };

  const fetchLeaveRequestsData = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/api/leave/${id}`);
      const data = await res.json();
      if (res.ok) {
        setLeaveRequestsData(data.data.detailedLeaveRequests);
        setLeaveSummary(data.data.leaveSummary);
      }
    } catch (error) {
      console.error("Error fetching leave requests data:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    if (id) {
      fetchEmployeeData(id);
      fetchEducationData(id);
      fetchWorkExperienceData(id);
      fetchLeaveRequestsData(id);
    }
  }, [id]);

  if (!employeeData) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

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
              <h2 className="mt-4 text-xl font-bold">{employeeData.firstName} {employeeData.lastName}</h2>
              <p className="text-sm text-muted-foreground">{employeeData.position}</p>
              <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">{employeeData.workStatus}</Badge>

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
                  <span className="text-sm">{extractProvinceAndCountry(employeeData.fullAddress)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">รหัสพนักงาน: {employeeData.empID}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">แผนก: {employeeData.departmentName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">วันที่เริ่มงาน: {formatDate(employeeData.hireDate)} <span className="text-blue-600">(อายุงาน {calculateWorkExperience(employeeData.hireDate)})</span></span>
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
                <TabsTrigger value="workAndEducation">การศึกษาและงาน</TabsTrigger>
                <TabsTrigger value="leave">การลา</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">ชื่อ-นามสกุล</h3>
                    <p className="text-sm">{employeeData.firstName} {employeeData.lastName}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">วันเกิด</h3>
                    <p className="text-sm">{formatDate(employeeData.birthDate)}<span className="text-blue-600"> (อายุ {calculateAge(employeeData.birthDate)})</span></p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">เพศ</h3>
                    <p className="text-sm">{employeeData.gender}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">ที่อยู่</h3>
                    <p className="text-sm">{employeeData.fullAddress}</p>
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
                        <p className="text-sm">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(employeeData.salary)}</p>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="workAndEducation" className="space-y-4">
                {/* ส่วนของการศึกษา */}
                <div className="space-y-4">
                  <h3 className="font-medium">ประวัติการศึกษา</h3>
                  {educationData?.map((edu: Education, index: number) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">
                            {edu.degree} สาขา {edu.field}
                          </h4>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">จบการศึกษาปี {edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                {/* ส่วนของประสบการณ์การทำงาน */}
                <div className="space-y-4">
                  <h3 className="font-medium">ประวัติการทำงาน</h3>
                  {workExperienceData?.map((exp, index) => (
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

              <TabsContent value="leave" className="space-y-4">
                <div className="space-y-4">
                  {leaveRequestsData?.map((leave, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-medium">{leave.leaveType}</h3>
                          <p className="text-sm text-muted-foreground">วันที่ลา: {formatDate(leave.startDate)} ถึง {formatDate(leave.endDate)}</p>
                          <p className="text-sm text-muted-foreground">เป็นเวลา:  {calculateLeaveDays(leave.startDate,leave.endDate)} วัน</p>
                        </div>
                        <div className="text-sm text-muted-foreground">{leave.status}</div>
                      </div>
                      <p className="mt-2 text-sm">{leave.reason}</p>
                    </div>
                  ))}
                </div>
                {leaveSummary && Object.values(leaveSummary).some(summary => summary.used > 0) && (
                  <div className="space-y-3">
                    <h3 className="font-medium">วันลาคงเหลือ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground">ลาพักร้อน</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-bold">{leaveSummary?.annual.used}</div>
                          <div className="ml-1 text-sm text-muted-foreground">/ {leaveSummary?.annual.maxCount} วัน</div>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-800"
                            style={{
                              width: `${((leaveSummary?.annual.used ?? 0) / (leaveSummary?.annual.maxCount ?? 1)) * 100}%`,

                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground">ลาป่วย</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-bold">{leaveSummary?.sick.used}</div>
                          <div className="ml-1 text-sm text-muted-foreground">/ {leaveSummary?.sick.maxCount} วัน</div>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-800"
                            style={{ width: `${(leaveSummary?.sick.used / leaveSummary?.sick.maxCount) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground">ลากิจ</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-bold">{leaveSummary?.personal.used}</div>
                          <div className="ml-1 text-sm text-muted-foreground">
                            / {leaveSummary?.personal.maxCount} วัน
                          </div>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-800"
                            style={{
                              width: `${(leaveSummary?.personal.used / leaveSummary?.personal.maxCount) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="text-sm text-muted-foreground">ลาอื่นๆ</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-bold">{leaveSummary?.other.used}</div>
                          <div className="ml-1 text-sm text-muted-foreground">
                            วัน
                          </div>
                        </div>
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-800"
                            style={{
                              width: `${(leaveSummary?.other.used / leaveSummary?.other.maxCount) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}