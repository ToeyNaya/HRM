import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, CreditCard, FileText, GraduationCap, MessageSquare } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">การแจ้งเตือน</h1>

      <Card>
        <CardHeader>
          <CardTitle>การแจ้งเตือนทั้งหมด</CardTitle>
          <CardDescription>การแจ้งเตือนและข่าวสารสำคัญ</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
              <TabsTrigger value="unread">ยังไม่ได้อ่าน</TabsTrigger>
              <TabsTrigger value="important">สำคัญ</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Calendar className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">คำขอลาของคุณได้รับการอนุมัติ</h3>
                      <Badge variant="outline">5 นาทีที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      คำขอลาพักร้อนของคุณในวันที่ 15-20 กรกฎาคม 2567 ได้รับการอนุมัติแล้ว
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <GraduationCap className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">หลักสูตรฝึกอบรมใหม่</h3>
                      <Badge variant="outline">2 ชั่วโมงที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">มีหลักสูตรฝึกอบรม "ทักษะการเป็นผู้นำ" เปิดให้ลงทะเบียนแล้ว</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <FileText className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">การประเมินผลงานประจำไตรมาส</h3>
                      <Badge variant="outline">1 วันที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ถึงกำหนดการประเมินผลงานประจำไตรมาสที่ 2/2567 ในวันที่ 30 มิถุนายน 2567
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <CreditCard className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">การจ่ายเงินเดือน</h3>
                      <Badge variant="outline">2 วันที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      เงินเดือนประจำเดือนมิถุนายน 2567 ได้โอนเข้าบัญชีของคุณเรียบร้อยแล้ว
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <MessageSquare className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">ข้อความใหม่จากผู้จัดการ</h3>
                      <Badge variant="outline">3 วันที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">คุณได้รับข้อความใหม่จากผู้จัดการของคุณเกี่ยวกับโครงการใหม่</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="unread" className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Calendar className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">คำขอลาของคุณได้รับการอนุมัติ</h3>
                      <Badge variant="outline">5 นาทีที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      คำขอลาพักร้อนของคุณในวันที่ 15-20 กรกฎาคม 2567 ได้รับการอนุมัติแล้ว
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <GraduationCap className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">หลักสูตรฝึกอบรมใหม่</h3>
                      <Badge variant="outline">2 ชั่วโมงที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">มีหลักสูตรฝึกอบรม "ทักษะการเป็นผู้นำ" เปิดให้ลงทะเบียนแล้ว</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="important" className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <FileText className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">การประเมินผลงานประจำไตรมาส</h3>
                      <Badge variant="outline">1 วันที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ถึงกำหนดการประเมินผลงานประจำไตรมาสที่ 2/2567 ในวันที่ 30 มิถุนายน 2567
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <CreditCard className="h-5 w-5 text-blue-800" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">การจ่ายเงินเดือน</h3>
                      <Badge variant="outline">2 วันที่แล้ว</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      เงินเดือนประจำเดือนมิถุนายน 2567 ได้โอนเข้าบัญชีของคุณเรียบร้อยแล้ว
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>การตั้งค่าการแจ้งเตือน</CardTitle>
          <CardDescription>ปรับแต่งการแจ้งเตือนที่คุณต้องการรับ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-800" />
                <span>การแจ้งเตือนการลา</span>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-800" />
                <span>การแจ้งเตือนเงินเดือน</span>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-800" />
                <span>การแจ้งเตือนการฝึกอบรม</span>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-800" />
                <span>การแจ้งเตือนการประเมินผล</span>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-800" />
                <span>การแจ้งเตือนข่าวสารบริษัท</span>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
