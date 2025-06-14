'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const TabReport = () => {
    // ข้อมูลสำหรับกราฟ
    const employeeData = [
        { name: "ม.ค.", จำนวนพนักงาน: 220 },
        { name: "ก.พ.", จำนวนพนักงาน: 225 },
        { name: "มี.ค.", จำนวนพนักงาน: 230 },
        { name: "เม.ย.", จำนวนพนักงาน: 235 },
        { name: "พ.ค.", จำนวนพนักงาน: 240 },
        { name: "มิ.ย.", จำนวนพนักงาน: 245 },
    ]

    const attendanceData = [
        { name: "จ", มาตรงเวลา: 200, มาสาย: 20, ลา: 15, ขาดงาน: 10 },
        { name: "อ", มาตรงเวลา: 210, มาสาย: 15, ลา: 10, ขาดงาน: 10 },
        { name: "พ", มาตรงเวลา: 205, มาสาย: 20, ลา: 12, ขาดงาน: 8 },
        { name: "พฤ", มาตรงเวลา: 215, มาสาย: 10, ลา: 15, ขาดงาน: 5 },
        { name: "ศ", มาตรงเวลา: 200, มาสาย: 25, ลา: 10, ขาดงาน: 10 },
    ]

    const departmentData = [
        { name: "ฝ่ายบุคคล", value: 20, color: "#0F172A" },
        { name: "ฝ่ายการตลาด", value: 45, color: "#1E40AF" },
        { name: "ฝ่ายขาย", value: 60, color: "#3B82F6" },
        { name: "ฝ่ายไอที", value: 35, color: "#93C5FD" },
        { name: "ฝ่ายบัญชี", value: 30, color: "#BFDBFE" },
        { name: "ฝ่ายผลิต", value: 55, color: "#60A5FA" },
    ]

    const leaveData = [
        { name: "ม.ค.", ลาป่วย: 15, ลาพักร้อน: 10, ลากิจ: 5 },
        { name: "ก.พ.", ลาป่วย: 12, ลาพักร้อน: 8, ลากิจ: 3 },
        { name: "มี.ค.", ลาป่วย: 18, ลาพักร้อน: 12, ลากิจ: 6 },
        { name: "เม.ย.", ลาป่วย: 10, ลาพักร้อน: 15, ลากิจ: 4 },
        { name: "พ.ค.", ลาป่วย: 8, ลาพักร้อน: 20, ลากิจ: 2 },
        { name: "มิ.ย.", ลาป่วย: 14, ลาพักร้อน: 18, ลากิจ: 7 },
    ]
    return (
        <Tabs defaultValue="overview">
            <TabsList className="mb-4">
                <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
                <TabsTrigger value="employees">พนักงาน</TabsTrigger>
                <TabsTrigger value="attendance">การลงเวลา</TabsTrigger>
                <TabsTrigger value="leave">การลา</TabsTrigger>
                <TabsTrigger value="payroll">เงินเดือน</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">พนักงานทั้งหมด</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">245</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 12% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">อัตราการลาออก</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3.2%</div>
                            <p className="text-xs text-muted-foreground">ลดลง 1.5% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">การมาทำงาน</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">95%</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 2% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ค่าใช้จ่ายเฉลี่ย/พนักงาน</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45,000฿</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 5% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>จำนวนพนักงานตามแผนก</CardTitle>
                            <CardDescription>แสดงจำนวนพนักงานแยกตามแผนก</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={departmentData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={2}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {departmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                        <Tooltip formatter={(value, name) => [`${value} คน`, name]} labelFormatter={() => ""} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>แนวโน้มจำนวนพนักงาน</CardTitle>
                            <CardDescription>แสดงแนวโน้มจำนวนพนักงานในแต่ละเดือน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={employeeData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip formatter={(value) => [`${value} คน`, "จำนวนพนักงาน"]} />
                                        <Line
                                            type="monotone"
                                            dataKey="จำนวนพนักงาน"
                                            stroke="#0F172A"
                                            strokeWidth={2}
                                            activeDot={{ r: 8 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>การลงเวลาประจำสัปดาห์</CardTitle>
                            <CardDescription>แสดงข้อมูลการลงเวลาของพนักงานในแต่ละวัน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={attendanceData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="มาตรงเวลา" stackId="a" fill="#0F172A" />
                                        <Bar dataKey="มาสาย" stackId="a" fill="#3B82F6" />
                                        <Bar dataKey="ลา" stackId="a" fill="#93C5FD" />
                                        <Bar dataKey="ขาดงาน" stackId="a" fill="#BFDBFE" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="employees">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>พนักงานตามเพศ</CardTitle>
                            <CardDescription>สัดส่วนพนักงานแยกตามเพศ</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: "ชาย", value: 140, color: "#0F172A" },
                                                { name: "หญิง", value: 105, color: "#3B82F6" },
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            <Cell fill="#0F172A" />
                                            <Cell fill="#3B82F6" />
                                        </Pie>
                                        <Tooltip formatter={(value, name) => [`${value} คน`, name]} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>พนักงานตามอายุ</CardTitle>
                            <CardDescription>สัดส่วนพนักงานแยกตามช่วงอายุ</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: "20-30 ปี", value: 85, color: "#0F172A" },
                                                { name: "31-40 ปี", value: 95, color: "#1E40AF" },
                                                { name: "41-50 ปี", value: 45, color: "#3B82F6" },
                                                { name: "51+ ปี", value: 20, color: "#93C5FD" },
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            <Cell fill="#0F172A" />
                                            <Cell fill="#1E40AF" />
                                            <Cell fill="#3B82F6" />
                                            <Cell fill="#93C5FD" />
                                        </Pie>
                                        <Tooltip formatter={(value, name) => [`${value} คน`, name]} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>อายุงานเฉลี่ย</CardTitle>
                            <CardDescription>อายุงานเฉลี่ยของพนักงานแยกตามแผนก</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            { name: "ฝ่ายบุคคล", อายุงาน: 4.5 },
                                            { name: "ฝ่ายการตลาด", อายุงาน: 3.2 },
                                            { name: "ฝ่ายขาย", อายุงาน: 2.8 },
                                            { name: "ฝ่ายไอที", อายุงาน: 3.5 },
                                            { name: "ฝ่ายบัญชี", อายุงาน: 5.2 },
                                            { name: "ฝ่ายผลิต", อายุงาน: 4.0 },
                                        ]}
                                        layout="vertical"
                                        margin={{ left: 80 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" width={80} />
                                        <Tooltip formatter={(value) => [`${value} ปี`, "อายุงานเฉลี่ย"]} />
                                        <Bar dataKey="อายุงาน" fill="#0F172A" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>รายงานการเข้า-ออกของพนักงาน</CardTitle>
                            <CardDescription>แสดงข้อมูลการเข้าและออกของพนักงานในแต่ละเดือน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            { name: "ม.ค.", เข้าใหม่: 10, ลาออก: 5 },
                                            { name: "ก.พ.", เข้าใหม่: 8, ลาออก: 3 },
                                            { name: "มี.ค.", เข้าใหม่: 12, ลาออก: 7 },
                                            { name: "เม.ย.", เข้าใหม่: 5, ลาออก: 4 },
                                            { name: "พ.ค.", เข้าใหม่: 7, ลาออก: 2 },
                                            { name: "มิ.ย.", เข้าใหม่: 9, ลาออก: 4 },
                                        ]}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="เข้าใหม่" fill="#0F172A" />
                                        <Bar dataKey="ลาออก" fill="#EF4444" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="attendance">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">มาตรงเวลา</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">85%</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 3% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">มาสาย</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">10%</div>
                            <p className="text-xs text-muted-foreground">ลดลง 2% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ลา</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">4%</div>
                            <p className="text-xs text-muted-foreground">ลดลง 1% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ขาดงาน</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1%</div>
                            <p className="text-xs text-muted-foreground">เท่ากับเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>การลงเวลาประจำสัปดาห์</CardTitle>
                            <CardDescription>แสดงข้อมูลการลงเวลาของพนักงานในแต่ละวัน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={attendanceData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="มาตรงเวลา" stackId="a" fill="#0F172A" />
                                        <Bar dataKey="มาสาย" stackId="a" fill="#3B82F6" />
                                        <Bar dataKey="ลา" stackId="a" fill="#93C5FD" />
                                        <Bar dataKey="ขาดงาน" stackId="a" fill="#BFDBFE" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>เวลาเข้างานเฉลี่ย</CardTitle>
                            <CardDescription>แสดงเวลาเข้างานเฉลี่ยของพนักงานในแต่ละวัน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        data={[
                                            { name: "จ", เวลาเข้างานเฉลี่ย: 8.5 },
                                            { name: "อ", เวลาเข้างานเฉลี่ย: 8.4 },
                                            { name: "พ", เวลาเข้างานเฉลี่ย: 8.6 },
                                            { name: "พฤ", เวลาเข้างานเฉลี่ย: 8.3 },
                                            { name: "ศ", เวลาเข้างานเฉลี่ย: 8.7 },
                                        ]}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis domain={[8, 9]} />
                                        <Tooltip formatter={(value) => [`${value} น.`, "เวลาเข้างานเฉลี่ย"]} />
                                        <Line type="monotone" dataKey="เวลาเข้างานเฉลี่ย" stroke="#0F172A" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="leave">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ลาป่วย</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">14 วัน</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 2 วันจากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ลาพักร้อน</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">18 วัน</div>
                            <p className="text-xs text-muted-foreground">ลดลง 2 วันจากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">ลากิจ</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">7 วัน</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 3 วันจากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>แนวโน้มการลา</CardTitle>
                            <CardDescription>แสดงแนวโน้มการลาประเภทต่างๆ ในแต่ละเดือน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={leaveData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="ลาป่วย" fill="#0F172A" />
                                        <Bar dataKey="ลาพักร้อน" fill="#3B82F6" />
                                        <Bar dataKey="ลากิจ" fill="#93C5FD" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>การลาตามแผนก</CardTitle>
                            <CardDescription>แสดงจำนวนวันลาเฉลี่ยต่อคนในแต่ละแผนก</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            { name: "ฝ่ายบุคคล", วันลาเฉลี่ย: 2.5 },
                                            { name: "ฝ่ายการตลาด", วันลาเฉลี่ย: 3.2 },
                                            { name: "ฝ่ายขาย", วันลาเฉลี่ย: 1.8 },
                                            { name: "ฝ่ายไอที", วันลาเฉลี่ย: 2.0 },
                                            { name: "ฝ่ายบัญชี", วันลาเฉลี่ย: 1.5 },
                                            { name: "ฝ่ายผลิต", วันลาเฉลี่ย: 2.8 },
                                        ]}
                                        layout="vertical"
                                        margin={{ left: 80 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" width={80} />
                                        <Tooltip formatter={(value) => [`${value} วัน/คน`, "วันลาเฉลี่ย"]} />
                                        <Bar dataKey="วันลาเฉลี่ย" fill="#0F172A" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            <TabsContent value="payroll">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">เงินเดือนรวม</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">11,025,000฿</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 5% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">เงินเดือนเฉลี่ย</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45,000฿</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 2% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">โบนัสรวม</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2,450,000฿</div>
                            <p className="text-xs text-muted-foreground">เพิ่มขึ้น 10% จากเดือนที่แล้ว</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>เงินเดือนเฉลี่ยตามแผนก</CardTitle>
                            <CardDescription>แสดงเงินเดือนเฉลี่ยในแต่ละแผนก</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            { name: "ฝ่ายบุคคล", เงินเดือนเฉลี่ย: 42000 },
                                            { name: "ฝ่ายการตลาด", เงินเดือนเฉลี่ย: 48000 },
                                            { name: "ฝ่ายขาย", เงินเดือนเฉลี่ย: 52000 },
                                            { name: "ฝ่ายไอที", เงินเดือนเฉลี่ย: 55000 },
                                            { name: "ฝ่ายบัญชี", เงินเดือนเฉลี่ย: 45000 },
                                            { name: "ฝ่ายผลิต", เงินเดือนเฉลี่ย: 38000 },
                                        ]}
                                        layout="vertical"
                                        margin={{ left: 80 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" width={80} />
                                        <Tooltip formatter={(value) => [`${value.toLocaleString()}฿`, "เงินเดือนเฉลี่ย"]} />
                                        <Bar dataKey="เงินเดือนเฉลี่ย" fill="#0F172A" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>แนวโน้มค่าใช้จ่ายด้านบุคลากร</CardTitle>
                            <CardDescription>แสดงแนวโน้มค่าใช้จ่ายด้านบุคลากรในแต่ละเดือน</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        data={[
                                            { name: "ม.ค.", ค่าใช้จ่าย: 10500000 },
                                            { name: "ก.พ.", ค่าใช้จ่าย: 10600000 },
                                            { name: "มี.ค.", ค่าใช้จ่าย: 10700000 },
                                            { name: "เม.ย.", ค่าใช้จ่าย: 10800000 },
                                            { name: "พ.ค.", ค่าใช้จ่าย: 10900000 },
                                            { name: "มิ.ย.", ค่าใช้จ่าย: 11025000 },
                                        ]}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip formatter={(value) => [`${value.toLocaleString()}฿`, "ค่าใช้จ่ายรวม"]} />
                                        <Line type="monotone" dataKey="ค่าใช้จ่าย" stroke="#0F172A" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>

    )
}

export default TabReport 