import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, Download, GraduationCap, Search, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function TrainingPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">การฝึกอบรม</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">หลักสูตรทั้งหมด</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <BookOpen className="h-4 w-4 text-blue-800" />
                </div>
                <div className="text-2xl font-bold">24</div>
              </div>
              <div className="text-xs text-muted-foreground">+3 จากเดือนที่แล้ว</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">หลักสูตรที่ลงทะเบียน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <GraduationCap className="h-4 w-4 text-blue-800" />
                </div>
                <div className="text-2xl font-bold">5</div>
              </div>
              <div className="text-xs text-muted-foreground">3 กำลังดำเนินการ</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">ชั่วโมงการเรียนรู้</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <Clock className="h-4 w-4 text-blue-800" />
                </div>
                <div className="text-2xl font-bold">32</div>
              </div>
              <div className="text-xs text-muted-foreground">ชั่วโมงในปีนี้</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>หลักสูตรที่กำลังเรียน</CardTitle>
          <CardDescription>หลักสูตรที่คุณกำลังเรียนอยู่ในขณะนี้</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-medium">ทักษะการเป็นผู้นำ</h3>
                  <p className="text-sm text-muted-foreground">วิทยากร: ดร.สมศักดิ์ ภาวนา</p>
                </div>
                <Badge className="w-fit bg-blue-800">กำลังดำเนินการ</Badge>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-sm font-medium">ความคืบหน้า</div>
                <div className="text-sm font-medium">60%</div>
              </div>
              <Progress value={60} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>เริ่ม: 01/06/2567</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>สิ้นสุด: 30/07/2567</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>10 ชั่วโมง</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>15 ผู้เข้าร่วม</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button className="bg-blue-800 hover:bg-blue-900">เข้าเรียนต่อ</Button>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-medium">การขายขั้นสูง</h3>
                  <p className="text-sm text-muted-foreground">วิทยากร: คุณวิชัย นักขาย</p>
                </div>
                <Badge className="w-fit bg-blue-800">กำลังดำเนินการ</Badge>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-sm font-medium">ความคืบหน้า</div>
                <div className="text-sm font-medium">30%</div>
              </div>
              <Progress value={30} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>เริ่ม: 15/06/2567</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>สิ้นสุด: 15/08/2567</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>15 ชั่วโมง</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>12 ผู้เข้าร่วม</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button className="bg-blue-800 hover:bg-blue-900">เข้าเรียนต่อ</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>หลักสูตรที่แนะนำ</CardTitle>
          <CardDescription>หลักสูตรที่เหมาะสมกับตำแหน่งและทักษะของคุณ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="ค้นหาหลักสูตร..." className="pl-8" />
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อหลักสูตร</TableHead>
                  <TableHead>วิทยากร</TableHead>
                  <TableHead>ระยะเวลา</TableHead>
                  <TableHead>ระดับ</TableHead>
                  <TableHead>ผู้เข้าร่วม</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>การวิเคราะห์ข้อมูลลูกค้า</TableCell>
                  <TableCell>ดร.วิเชียร นักวิเคราะห์</TableCell>
                  <TableCell>8 ชั่วโมง</TableCell>
                  <TableCell>
                    <Badge variant="outline">ระดับกลาง</Badge>
                  </TableCell>
                  <TableCell>25 คน</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">
                      ลงทะเบียน
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>การบริหารเวลาอย่างมีประสิทธิภาพ</TableCell>
                  <TableCell>คุณสมศรี ผู้จัดการ</TableCell>
                  <TableCell>6 ชั่วโมง</TableCell>
                  <TableCell>
                    <Badge variant="outline">ระดับต้น</Badge>
                  </TableCell>
                  <TableCell>30 คน</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">
                      ลงทะเบียน
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>การเจรจาต่อรองขั้นสูง</TableCell>
                  <TableCell>คุณประสิทธิ์ นักเจรจา</TableCell>
                  <TableCell>12 ชั่วโมง</TableCell>
                  <TableCell>
                    <Badge variant="outline">ระดับสูง</Badge>
                  </TableCell>
                  <TableCell>15 คน</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">
                      ลงทะเบียน
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>การพัฒนาทักษะการนำเสนอ</TableCell>
                  <TableCell>คุณวิชัย นักพูด</TableCell>
                  <TableCell>10 ชั่วโมง</TableCell>
                  <TableCell>
                    <Badge variant="outline">ระดับกลาง</Badge>
                  </TableCell>
                  <TableCell>20 คน</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">
                      ลงทะเบียน
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ประวัติการฝึกอบรม</CardTitle>
          <CardDescription>ประวัติการฝึกอบรมที่ผ่านมาของคุณ</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="completed">
            <TabsList className="mb-4">
              <TabsTrigger value="completed">เสร็จสิ้นแล้ว</TabsTrigger>
              <TabsTrigger value="certificates">ประกาศนียบัตร</TabsTrigger>
            </TabsList>
            <TabsContent value="completed">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ชื่อหลักสูตร</TableHead>
                      <TableHead>วันที่เสร็จสิ้น</TableHead>
                      <TableHead>ระยะเวลา</TableHead>
                      <TableHead>คะแนน</TableHead>
                      <TableHead className="text-right">จัดการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>การพัฒนาทักษะการนำเสนอ</TableCell>
                      <TableCell>15/05/2567</TableCell>
                      <TableCell>10 ชั่วโมง</TableCell>
                      <TableCell>90/100</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>การบริหารทีมงาน</TableCell>
                      <TableCell>30/03/2567</TableCell>
                      <TableCell>12 ชั่วโมง</TableCell>
                      <TableCell>85/100</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>การวางแผนการตลาด</TableCell>
                      <TableCell>15/01/2567</TableCell>
                      <TableCell>15 ชั่วโมง</TableCell>
                      <TableCell>92/100</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          ดูรายละเอียด
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="certificates">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-full bg-blue-100 p-2">
                      <GraduationCap className="h-4 w-4 text-blue-800" />
                    </div>
                    <Badge variant="outline">15/05/2567</Badge>
                  </div>
                  <h3 className="mb-1 font-medium">การพัฒนาทักษะการนำเสนอ</h3>
                  <p className="mb-4 text-sm text-muted-foreground">คะแนน: 90/100</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    ดาวน์โหลดประกาศนียบัตร
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-full bg-blue-100 p-2">
                      <GraduationCap className="h-4 w-4 text-blue-800" />
                    </div>
                    <Badge variant="outline">30/03/2567</Badge>
                  </div>
                  <h3 className="mb-1 font-medium">การบริหารทีมงาน</h3>
                  <p className="mb-4 text-sm text-muted-foreground">คะแนน: 85/100</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    ดาวน์โหลดประกาศนียบัตร
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-full bg-blue-100 p-2">
                      <GraduationCap className="h-4 w-4 text-blue-800" />
                    </div>
                    <Badge variant="outline">15/01/2567</Badge>
                  </div>
                  <h3 className="mb-1 font-medium">การวางแผนการตลาด</h3>
                  <p className="mb-4 text-sm text-muted-foreground">คะแนน: 92/100</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    ดาวน์โหลดประกาศนียบัตร
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
