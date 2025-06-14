"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart3, ChartNoAxesCombined, FileText, Star } from "lucide-react"
import { HeaderCard } from "@/components/ui/HeaderCard"

export default function PerformancePage() {
  const router = useRouter()

  // ฟังก์ชันสำหรับดูรายละเอียดการประเมินผล
  const handleViewPerformanceDetail = (id: string) => {
    router.push(`/performance/${id}`)
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">การประเมินผล</h1>

      <Card>
        <HeaderCard
        title="การประเมินผลงานล่าสุด"
        description="ผลการประเมินประจำไตรมาสที่ 2/2567"
        icon={<ChartNoAxesCombined className="h-10 w-10 text-white" />}
      />
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">คะแนนรวม</div>
                  <div className="text-sm font-medium">85/100</div>
                </div>
                <Progress value={85} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-sm font-medium">ผลงานตามเป้าหมาย</div>
                    <div className="text-sm font-medium">90/100</div>
                  </div>
                  <Progress value={90} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-sm font-medium">ทักษะการทำงาน</div>
                    <div className="text-sm font-medium">85/100</div>
                  </div>
                  <Progress value={85} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-sm font-medium">การทำงานเป็นทีม</div>
                    <div className="text-sm font-medium">80/100</div>
                  </div>
                  <Progress value={80} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-sm font-medium">ความเป็นผู้นำ</div>
                    <div className="text-sm font-medium">75/100</div>
                  </div>
                  <Progress value={75} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-medium">ผลการประเมินโดยรวม</h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="h-5 w-5" />
                  <span className="ml-2 text-sm text-gray-700">ดีมาก (4/5)</span>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-medium">ความคิดเห็นจากผู้ประเมิน</h3>
                <p className="text-sm text-gray-600">
                  คุณสมชายมีผลงานที่ดีมากในไตรมาสนี้ สามารถทำยอดขายได้เกินเป้าหมายที่กำหนด มีทักษะการทำงานที่ดี
                  และสามารถทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ อย่างไรก็ตาม ควรพัฒนาทักษะความเป็นผู้นำเพิ่มเติม
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-medium">เป้าหมายการพัฒนา</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-blue-100 p-1">
                      <BarChart3 className="h-3 w-3 text-blue-800" />
                    </span>
                    <span>พัฒนาทักษะความเป็นผู้นำผ่านการฝึกอบรม</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-blue-100 p-1">
                      <BarChart3 className="h-3 w-3 text-blue-800" />
                    </span>
                    <span>เพิ่มยอดขายอีก 15% ในไตรมาสถัดไป</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-blue-100 p-1">
                      <BarChart3 className="h-3 w-3 text-blue-800" />
                    </span>
                    <span>พัฒนาทักษะการนำเสนองานต่อลูกค้า</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-800 hover:bg-blue-900" onClick={() => handleViewPerformanceDetail("1")}>
                  <FileText className="mr-2 h-4 w-4" />
                  ดูรายละเอียดเพิ่มเติม
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ประวัติการประเมินผล</CardTitle>
          <CardDescription>ประวัติการประเมินผลงานย้อนหลัง</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="evaluations">
            <TabsList className="mb-4">
              <TabsTrigger value="evaluations">การประเมินของฉัน</TabsTrigger>
              <TabsTrigger value="team">การประเมินทีม</TabsTrigger>
              <TabsTrigger value="goals">เป้าหมาย</TabsTrigger>
            </TabsList>
            <TabsContent value="evaluations">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>รอบการประเมิน</TableHead>
                      <TableHead>วันที่ประเมิน</TableHead>
                      <TableHead>ผู้ประเมิน</TableHead>
                      <TableHead>คะแนนรวม</TableHead>
                      <TableHead>ผลการประเมิน</TableHead>
                      <TableHead className="text-right">จัดการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ไตรมาส 2/2567</TableCell>
                      <TableCell>30/06/2567</TableCell>
                      <TableCell>นายวิชัย ผู้จัดการ</TableCell>
                      <TableCell>85/100</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => handleViewPerformanceDetail("1")}
                        >
                          <FileText className="h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ไตรมาส 1/2567</TableCell>
                      <TableCell>31/03/2567</TableCell>
                      <TableCell>นายวิชัย ผู้จัดการ</TableCell>
                      <TableCell>80/100</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => handleViewPerformanceDetail("2")}
                        >
                          <FileText className="h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ไตรมาส 4/2566</TableCell>
                      <TableCell>31/12/2566</TableCell>
                      <TableCell>นายวิชัย ผู้จัดการ</TableCell>
                      <TableCell>75/100</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="h-4 w-4" />
                          <Star className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => handleViewPerformanceDetail("3")}
                        >
                          <FileText className="h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="team">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ชื่อพนักงาน</TableHead>
                      <TableHead>ตำแหน่ง</TableHead>
                      <TableHead>รอบการประเมินล่าสุด</TableHead>
                      <TableHead>คะแนนรวม</TableHead>
                      <TableHead>ผลการประเมิน</TableHead>
                      <TableHead className="text-right">จัดการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>สมศรี มีสุข</TableCell>
                      <TableCell>นักการตลาด</TableCell>
                      <TableCell>ไตรมาส 2/2567</TableCell>
                      <TableCell>90/100</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => handleViewPerformanceDetail("4")}
                        >
                          <FileText className="h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>วิชัย สุขใจ</TableCell>
                      <TableCell>โปรแกรมเมอร์</TableCell>
                      <TableCell>ไตรมาส 2/2567</TableCell>
                      <TableCell>85/100</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => handleViewPerformanceDetail("5")}
                        >
                          <FileText className="h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>สมหญิง รักดี</TableCell>
                      <TableCell>นักการตลาด</TableCell>
                      <TableCell>ไตรมาส 2/2567</TableCell>
                      <TableCell>80/100</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="fill-yellow-500 h-4 w-4" />
                          <Star className="h-4 w-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex gap-1"
                          onClick={() => handleViewPerformanceDetail("6")}
                        >
                          <FileText className="h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="goals">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">เพิ่มยอดขายอีก 15% ในไตรมาสถัดไป</h3>
                      <p className="text-sm text-muted-foreground">กำหนดเสร็จ: 30/09/2567</p>
                    </div>
                    <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">กำลังดำเนินการ</div>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">ความคืบหน้า</div>
                    <div className="text-sm font-medium">60%</div>
                  </div>
                  <Progress value={60} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">พัฒนาทักษะความเป็นผู้นำผ่านการฝึกอบรม</h3>
                      <p className="text-sm text-muted-foreground">กำหนดเสร็จ: 31/08/2567</p>
                    </div>
                    <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">กำลังดำเนินการ</div>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">ความคืบหน้า</div>
                    <div className="text-sm font-medium">30%</div>
                  </div>
                  <Progress value={30} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">พัฒนาทักษะการนำเสนองานต่อลูกค้า</h3>
                      <p className="text-sm text-muted-foreground">กำหนดเสร็จ: 15/07/2567</p>
                    </div>
                    <div className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">เสร็จสิ้น</div>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">ความคืบหน้า</div>
                    <div className="text-sm font-medium">100%</div>
                  </div>
                  <Progress value={100} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
