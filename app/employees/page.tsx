"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Filter } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import GenericSelect from "@/components/defaultUI/GenericSelect"
import Papa from "papaparse"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

const employees = [
  {
    id: "EMP001",
    name: "สมชาย ใจดี",
    position: "ผู้จัดการฝ่ายขาย",
    department: "ฝ่ายขาย",
    email: "somchai@example.com",
    status: "ทำงาน"
  },
  {
    id: "EMP002",
    name: "สมศรี มีสุข",
    position: "นักการตลาด",
    department: "ฝ่ายการตลาด",
    email: "somsri@example.com",
    status: "ทำงาน"
  },
  {
    id: "EMP003",
    name: "วิชัย สุขใจ",
    position: "โปรแกรมเมอร์",
    department: "ฝ่ายไอที",
    email: "wichai@example.com",
    status: "ลา"
  },
  {
    id: "EMP004",
    name: "สมหญิง รักดี",
    position: "นักการตลาด",
    department: "ฝ่ายการตลาด",
    email: "somying@example.com",
    status: "ทำงาน"
  },
  {
    id: "EMP005",
    name: "ประสิทธิ์ มั่นคง",
    position: "พนักงานบัญชี",
    department: "ฝ่ายบัญชี",
    email: "prasit@example.com",
    status: "ทำงาน"
  }
];

const departmentOptions = ["all", "ฝ่ายบุคคล", "ฝ่ายการตลาด", "ฝ่ายขาย", "ฝ่ายไอที", "ฝ่ายบัญชี", "ฝ่ายผลิต"];
const tableHeaders = ["รหัสพนักงาน", "ชื่อ-นามสกุล", "ตำแหน่ง", "แผนก", "อีเมล", "สถานะ"]


export default function EmployeesPage() {
  const router = useRouter()
  const { user } = useAuth()
  const isHR = user?.role === "hr"

  const handleViewEmployee = (id: string) => router.push(`/employees/${id}`)
  const handleAddEmployee = () => router.push("/employees/add")

  const statusStyle = (status: string) =>
    status === "ลา"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-green-100 text-green-800"

  const exportCSV = () => {
    const data = [tableHeaders, ...employees.map(emp => [
      emp.id,
      emp.name,
      emp.position,
      emp.department,
      emp.email,
      emp.status,
    ])]
    const csv = Papa.unparse(data)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "employees.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportExcel = () => {
    const wsData = [
      tableHeaders,
      ...employees.map(emp => [
        emp.id,
        emp.name,
        emp.position,
        emp.department,
        emp.email,
        emp.status,
      ])
    ]
    const ws = XLSX.utils.aoa_to_sheet(wsData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Employees")
    XLSX.writeFile(wb, "employees.xlsx")
  }

  const exportPDF = () => {
    const doc = new jsPDF()
    autoTable(doc, {
      head: [tableHeaders],
      body: employees.map(emp => [
        emp.id,
        emp.name,
        emp.position,
        emp.department,
        emp.email,
        emp.status,
      ]),
    })
    doc.save("employees.pdf")
  }


  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">พนักงาน</h1>
        {isHR && (
          <Button className="bg-blue-800 hover:bg-blue-900" onClick={handleAddEmployee}>
            <Plus className="mr-2 h-4 w-4" /> เพิ่มพนักงานใหม่
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="bg-blue-600 rounded-t-lg mb-2">
          <CardTitle className="text-white">รายชื่อพนักงานทั้งหมด</CardTitle>
          <CardDescription className="text-blue-200">จัดการข้อมูลพนักงานทั้งหมดในระบบ</CardDescription>
        </CardHeader>
        <CardContent>

          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="ค้นหาพนักงาน..." className="pl-8" />
            </div>
            <div className="flex flex-wrap gap-2 justify-start">
              <Button
                variant="outline"
                className="hover:bg-green-100 hover:text-green-800 transition-colors duration-300" onClick={exportCSV}
              >
                Export CSV
              </Button>
              <Button
                variant="outline"
                className="hover:bg-green-700 hover:text-white transition-colors duration-300" onClick={exportExcel}
              >
                Export Excel
              </Button>
              <Button
                variant="outline"
                className="hover:bg-red-600 hover:text-white transition-colors duration-300" onClick={exportPDF}
              >
                Export PDF
              </Button>
            </div>

            <GenericSelect data={departmentOptions} defaultValue="all" placeholder="แผนก" />
          </div>
          <div className="rounded-md border overflow-hidden">
            <Table className="rounded-t-lg">
              <TableHeader className="bg-blue-600 text-white">
                <TableRow>
                  {tableHeaders.concat("จัดการ").map((head, i) => (
                    <TableHead key={i} className={head === "จัดการ" ? "text-center text-white" : "text-white"}>
                      {head}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map(emp => (
                  <TableRow key={emp.id}>
                    <TableCell>{emp.id}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.department}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>
                      <span className={`rounded-full px-2 py-1 text-xs ${statusStyle(emp.status)}`}>
                        {emp.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" onClick={() => handleViewEmployee(emp.id)}>
                        ดูข้อมูล
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="mb-4 flex flex-wrap gap-2 justify-start">
              <Button variant="outline">Export CSV</Button>
              <Button variant="outline">Export Excel</Button>
              <Button variant="outline">Export PDF</Button>
            </div>
            <div className="mt-4 flex items-center justify-end space-x-2">
              <Button variant="outline" size="sm">ก่อนหน้า</Button>
              <Button variant="outline" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">ถัดไป</Button>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
