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
    </div>
  )
}
