import DataTable from "@/components/defaultUI/DataTable"
import GenericSelect from "@/components/defaultUI/GenericSelect"
import Pagination from "@/components/defaultUI/Pagination"
import { PayrollHeader } from "@/components/payroll/PayrollHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeaderCard } from "@/components/ui/HeaderCard"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileChartColumn, FileText, Filter } from "lucide-react"

const payrollData = [
  { month: "พฤษภาคม 2567", date: "28/05/2567", base: "45,000.00", extra: "15,000.00", deduct: "6,500.00", net: "53,500.00" },
  { month: "เมษายน 2567", date: "28/04/2567", base: "45,000.00", extra: "5,000.00", deduct: "6,000.00", net: "44,000.00" },
  { month: "มีนาคม 2567", date: "28/03/2567", base: "45,000.00", extra: "5,000.00", deduct: "6,000.00", net: "44,000.00" },
  { month: "กุมภาพันธ์ 2567", date: "28/02/2567", base: "45,000.00", extra: "5,000.00", deduct: "6,000.00", net: "44,000.00" },
  { month: "มกราคม 2567", date: "28/01/2567", base: "45,000.00", extra: "5,000.00", deduct: "6,000.00", net: "44,000.00" },
];

const years = ["all", "2567", "2566", "2565", "2564", "2563"];

const tableHeaders = ["เดือน", "วันที่จ่าย", "เงินเดือนพื้นฐาน", "รายได้อื่นๆ", "รายการหัก", "เงินเดือนสุทธิ", "จัดการ"];

const tableRows = payrollData.map(item => [
  item.month,
  item.date,
  item.base,
  item.extra,
  item.deduct,
  <span className="font-medium">{item.net}</span>,
  <Button variant="ghost" size="sm" className="flex gap-1 justify-center mx-auto">
    <FileText className="h-4 w-4" />
    ดูสลิป
  </Button>
]);

export default function PayrollPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">เงินเดือน</h1>
      <PayrollHeader />
      <Card>
        <HeaderCard
          title="ประวัติเงินเดือน"
          description="ประวัติการจ่ายเงินเดือนย้อนหลัง 2567"
          icon={<FileChartColumn className="h-10 w-10 text-white" />}
        />
        <CardContent>
          <GenericSelect className={'my-3 justify-end'} data={years} defaultValue="all" placeholder="เลือกปี" />
          <DataTable headers={tableHeaders} data={tableRows} />
          <Pagination />
        </CardContent>
      </Card>
    </div>
  )
}
