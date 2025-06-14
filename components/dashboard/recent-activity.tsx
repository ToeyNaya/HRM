import { Calendar, CreditCard, GraduationCap, Users } from "lucide-react"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex">
        <div className="relative mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <Users className="h-6 w-6 text-blue-800" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
            +
          </span>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">พนักงานใหม่</p>
          <p className="text-sm text-muted-foreground">สมหญิง รักดี เข้าร่วมบริษัทในตำแหน่ง นักการตลาด</p>
          <p className="text-xs text-muted-foreground">2 ชั่วโมงที่แล้ว</p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <Calendar className="h-6 w-6 text-blue-800" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">คำขอลาได้รับการอนุมัติ</p>
          <p className="text-sm text-muted-foreground">คำขอลาพักร้อนของ วิชัย สุขใจ ได้รับการอนุมัติแล้ว</p>
          <p className="text-xs text-muted-foreground">5 ชั่วโมงที่แล้ว</p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <GraduationCap className="h-6 w-6 text-blue-800" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">การฝึกอบรมเสร็จสิ้น</p>
          <p className="text-sm text-muted-foreground">สมศรี มีสุข เสร็จสิ้นการฝึกอบรม "ทักษะการเป็นผู้นำ"</p>
          <p className="text-xs text-muted-foreground">1 วันที่แล้ว</p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <CreditCard className="h-6 w-6 text-blue-800" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">การจ่ายเงินเดือน</p>
          <p className="text-sm text-muted-foreground">การจ่ายเงินเดือนประจำเดือนเสร็จสิ้น</p>
          <p className="text-xs text-muted-foreground">2 วันที่แล้ว</p>
        </div>
      </div>
    </div>
  )
}
