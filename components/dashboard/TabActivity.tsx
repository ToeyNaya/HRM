import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { RecentActivity } from './recent-activity'
import { Check, Info, X } from 'lucide-react'

const pendingItems = [
    { title: "คำขอลาป่วย", detail: "สมชาย ใจดี - 2 วัน" },
    { title: "คำขอเบิกค่าเดินทาง", detail: "สมศรี มีสุข - 1,500 บาท" },
    { title: "คำขอลาพักร้อน", detail: "วิชัย สุขใจ - 5 วัน" }
]

const scheduleItems = [
    {
        title: "การฝึกอบรม: การพัฒนาทักษะการสื่อสาร",
        detail: "15 มิถุนายน 2567 - ห้องประชุมใหญ่",
        badge: { text: "ฝึกอบรม", color: "blue" }
    },
    {
        title: "การประเมินผลงานประจำไตรมาส",
        detail: "30 มิถุนายน 2567",
        badge: { text: "ประเมินผล", color: "yellow" }
    },
    {
        title: "งานเลี้ยงประจำปีบริษัท",
        detail: "15 กรกฎาคม 2567 - โรงแรมเซ็นทรัล",
        badge: { text: "กิจกรรม", color: "purple" }
    }
]

const PendingItem = ({ title, detail }: { title: string; detail: string }) => (
    <div className="flex items-center justify-between border-b pb-4">
        <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex items-center gap-1 rounded-md bg-green-100 px-3 py-1 text-sm text-green-800 hover:bg-green-300 transition">
                <Check size={16} />
                อนุมัติ
            </button>
            <button className="flex items-center gap-1 rounded-md bg-red-100 px-3 py-1 text-sm text-red-800 hover:bg-red-300 transition">
                <X size={16} />
                ปฏิเสธ
            </button>
            <button className="flex items-center gap-1 rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800 hover:bg-blue-300 transition">
                <Info size={16} />
                ดูรายละเอียด
            </button>
        </div>
    </div>
)

const ScheduleItem = ({ title, detail, badge }: any) => (
    <div className="flex items-center justify-between border-b pb-4">
        <div>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{detail}</p>
        </div>
        <div className={`rounded bg-${badge.color}-100 px-2 py-1 text-xs text-${badge.color}-800`}>
            {badge.text}
        </div>
    </div>
)

export function TabActivity() {
    return (
        <Tabs defaultValue="activity" className="space-y-4 rounded-t-lg">
            <TabsList className="bg-blue-600 text-white">
                <TabsTrigger value="activity">กิจกรรมล่าสุด</TabsTrigger>
                <TabsTrigger value="pending">รออนุมัติ</TabsTrigger>
                <TabsTrigger value="upcoming">กำหนดการ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity">
                <Card>
                    <CardHeader className="bg-blue-600 mb-4 rounded-t-lg">
                        <CardTitle className="text-white">กิจกรรมล่าสุด</CardTitle>
                        <CardDescription className="text-blue-200">กิจกรรมที่เกิดขึ้นในระบบ 7 วันล่าสุด</CardDescription>
                    </CardHeader>
                    <CardContent><RecentActivity /></CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="pending">
                <Card>
                    <CardHeader className="bg-blue-600 mb-4 rounded-t-lg">
                        <CardTitle className="text-white">รายการรออนุมัติ</CardTitle>
                        <CardDescription className="text-blue-200">รายการที่รอการอนุมัติจากผู้จัดการ</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {pendingItems.map((item, i) => (
                            <PendingItem key={i} {...item} />
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="upcoming">
                <Card>
                    <CardHeader className="bg-blue-600 mb-4 rounded-t-lg">
                        <CardTitle className="text-white">กำหนดการที่จะมาถึง</CardTitle>
                        <CardDescription className="text-white">กิจกรรมและกำหนดการสำคัญที่กำลังจะมาถึง</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {scheduleItems.map((item, i) => (
                            <ScheduleItem key={i} {...item} />
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
