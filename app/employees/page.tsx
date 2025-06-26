"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import GenericSelect from "@/components/defaultUI/GenericSelect";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Exporter from "@/lib/Exporter";
import ExportSelector from "@/components/defaultUI/ExportSelector";
import { Badge } from "@/components/ui/badge";

const tableHeaders = ["รหัสพนักงาน", "ชื่อ-นามสกุล", "ตำแหน่ง", "แผนก", "อีเมล", "สถานะ"];

export default function EmployeesPage() {
  const router = useRouter();
  const { user } = useAuth();
  const isHR = user?.role === "hr";
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = useState<any[]>([]);
  const [admontCallAPI, setAdmontCallAPI] = useState(0);
  const [departmentOptions, setDepartmentOptions] = useState<string[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [exportType, setExportType] = useState<string>("");

  useEffect(() => {
    if (employees.length === 0) {
      fetchEmployees();
    }
  }, []);

  useEffect(() => {
    // ทำการกรองพนักงานจากแผนกที่เลือก
    const filteredByDepartment = employees.filter(
      (emp) => emp.departmentName === selectedDepartment || selectedDepartment === "all"
    );
    // ค้นหาทุกฟิลด์ภายในพนักงานที่กรองแผนกแล้ว
    setFilteredEmployees(
      filteredByDepartment.filter(
        (emp) =>
          emp.empID.toLowerCase().includes(searchQuery.toLowerCase()) ||  // ค้นหารหัสพนักงาน
          `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||  // ค้นหาชื่อ-นามสกุล
          emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||  // ค้นหาตำแหน่ง
          emp.departmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||  // ค้นหาแผนก
          emp.email.toLowerCase().includes(searchQuery.toLowerCase())  // ค้นหาอีเมล
      )
    );
  }, [searchQuery, employees, selectedDepartment]);


  const fetchEmployees = async () => {
    try {
      setAdmontCallAPI(admontCallAPI + 1);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/emp`);
      if (Array.isArray(response.data.data)) {
        setEmployees(response.data.data);
        setFilteredEmployees(response.data.data);
        const uniqueDepartments = [
          "all",
          ...new Set(response.data.data.map((emp: any) => emp.departmentName)),
        ];
        setDepartmentOptions(uniqueDepartments as string[]);
        setLoading(false);
      } else {
        setError("API response is not in the expected format.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  const handleDepartmentChange = (selectedDepartment: string) => {
    setSelectedDepartment(selectedDepartment);  // อัพเดตแผนกที่เลือก
    // กรองพนักงานตามแผนกที่เลือก
    const filteredByDepartment = employees.filter(
      (emp) => emp.departmentName === selectedDepartment || selectedDepartment === "all"
    );
    setFilteredEmployees(filteredByDepartment);  // อัพเดต filteredEmployees ตามแผนกที่เลือก
  };
  const handleViewEmployee = (id: string) => router.push(`/employees/${id}`);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">พนักงาน</h1>
        {isHR && (
          <Button className="bg-blue-800 hover:bg-blue-900" onClick={() => router.push("/employees/add")}>
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
          {loading && <p>กำลังโหลดข้อมูล...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ค้นหาพนักงาน..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <GenericSelect
              data={departmentOptions}
              defaultValue="all"
              placeholder="แผนก"
              onChange={handleDepartmentChange}
            />
          <ExportSelector employees={filteredEmployees} tableHeaders={tableHeaders} />
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
                {Array.isArray(filteredEmployees) && filteredEmployees.length > 0 ? (
                  filteredEmployees.map((emp) => (
                    <TableRow key={emp.empID}>
                      <TableCell>{emp.empID}</TableCell>
                      <TableCell>{`${emp.firstName} ${emp.lastName}`}</TableCell>
                      <TableCell>{emp.position}</TableCell>
                      <TableCell>{emp.departmentName}</TableCell>
                      <TableCell>{emp.email}</TableCell>
                      <TableCell>
                      <Badge variant="default">{emp.status || "ทำงาน"}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="ghost" size="sm" onClick={() => handleViewEmployee(emp.empID)}>
                          ดูข้อมูล
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center">ไม่มีข้อมูลพนักงาน</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
