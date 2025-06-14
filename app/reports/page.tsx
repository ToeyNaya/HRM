import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  LineChart,
  PieChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { Download, FileText, Filter } from "lucide-react"
import TabReport from "@/components/report/TabReport"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">รายงาน</h1>
        <div className="flex gap-2">
          <Select defaultValue="june">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="เลือกเดือน" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="june">มิถุนายน 2567</SelectItem>
              <SelectItem value="may">พฤษภาคม 2567</SelectItem>
              <SelectItem value="april">เมษายน 2567</SelectItem>
              <SelectItem value="march">มีนาคม 2567</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button className="bg-blue-800 hover:bg-blue-900">
            <Download className="mr-2 h-4 w-4" />
            ส่งออกรายงาน
          </Button>
        </div>
      </div>

      <TabReport />



      <Card>
        <CardHeader>
          <CardTitle>รายงานที่บันทึกไว้</CardTitle>
          <CardDescription>รายงานที่คุณบันทึกไว้เพื่อดูภายหลัง</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <FileText className="h-5 w-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium">รายงานประจำเดือนมิถุนายน 2567</h3>
                  <p className="text-sm text-muted-foreground">บันทึกเมื่อ 30/06/2567</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex gap-1">
                <Download className="h-4 w-4" />
                ดาวน์โหลด
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <FileText className="h-5 w-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium">รายงานประจำเดือนพฤษภาคม 2567</h3>
                  <p className="text-sm text-muted-foreground">บันทึกเมื่อ 31/05/2567</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex gap-1">
                <Download className="h-4 w-4" />
                ดาวน์โหลด
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <FileText className="h-5 w-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium">รายงานไตรมาสที่ 1/2567</h3>
                  <p className="text-sm text-muted-foreground">บันทึกเมื่อ 31/03/2567</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="flex gap-1">
                <Download className="h-4 w-4" />
                ดาวน์โหลด
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
