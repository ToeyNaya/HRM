import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent } from '../ui/card'
import { useRouter } from 'next/navigation'
import { Eraser, Filter, TableOfContents } from 'lucide-react'
import { HeaderCard } from '../ui/HeaderCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const leaveData = [
    {
        id: '1',
        type: 'ลาพักร้อน',
        start: '15/07/2567',
        end: '20/07/2567',
        days: 5,
        reason: 'ท่องเที่ยวต่างจังหวัด',
        status: 'รออนุมัติ',
        statusColor: 'yellow',
    },
    {
        id: '2',
        type: 'ลาป่วย',
        start: '05/06/2567',
        end: '06/06/2567',
        days: 2,
        reason: 'ไข้หวัด',
        status: 'อนุมัติแล้ว',
        statusColor: 'green',
    },
    {
        id: '3',
        type: 'ลากิจ',
        start: '20/05/2567',
        end: '20/05/2567',
        days: 1,
        reason: 'ธุระส่วนตัว',
        status: 'อนุมัติแล้ว',
        statusColor: 'green',
    },
    {
        id: '4',
        type: 'ลาพักร้อน',
        start: '10/04/2567',
        end: '12/04/2567',
        days: 3,
        reason: 'พักผ่อนประจำปี',
        status: 'ไม่อนุมัติ',
        statusColor: 'red',
    },
]

const statusMap = {
    all: 'ทั้งหมด',
    pending: 'รออนุมัติ',
    approved: 'อนุมัติแล้ว',
    rejected: 'ไม่อนุมัติ',
}

export function HistoryLeave() {
    const router = useRouter()
    const handleViewLeaveDetail = (id: string) => {
        router.push(`/leave/${id}`)
    }

    const renderTable = (filter: keyof typeof statusMap) => {
        const filteredData = filter === 'all' ? leaveData : leaveData.filter((leave) => leave.status === statusMap[filter])
        return (
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ประเภทการลา</TableHead>
                            <TableHead>วันที่เริ่ม</TableHead>
                            <TableHead>วันที่สิ้นสุด</TableHead>
                            <TableHead>จำนวนวัน</TableHead>
                            <TableHead>เหตุผล</TableHead>
                            <TableHead>สถานะ</TableHead>
                            <TableHead className="text-right">จัดการ</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.start}</TableCell>
                                <TableCell>{item.end}</TableCell>
                                <TableCell>{item.days}</TableCell>
                                <TableCell>{item.reason}</TableCell>
                                <TableCell>
                                    <span className={`rounded-full bg-${item.statusColor}-100 px-2 py-1 text-xs text-${item.statusColor}-800`}>
                                        {item.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" onClick={() => handleViewLeaveDetail(item.id)}>
                                        ดูรายละเอียด
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }

    return (
        <Card>
            <HeaderCard
                title="ประวัติการลา"
                description="ประวัติการลาทั้งหมดของคุณ"
                icon={<TableOfContents className="h-10 w-10 text-white" />}
            />
            <CardContent>
                <Tabs defaultValue="all">
                    <div className="mb-4 flex flex-col justify-between sm:flex-row">
                        <TabsList className="mb-4 bg-blue-600 text-white">
                            {Object.entries(statusMap).map(([key, label]) => (
                                <TabsTrigger key={key} value={key}>{label}</TabsTrigger>
                            ))}
                        </TabsList>
                        <div className="flex gap-2">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[180px] focus:ring-offset-0 focus:ring-0">
                                    <SelectValue placeholder="แผนก" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">ทั้งหมด</SelectItem>
                                    <SelectItem value="hr">ลาพักร้อน</SelectItem>
                                    <SelectItem value="marketing">ลาป่วย</SelectItem>
                                    <SelectItem value="sales">ลากิจ</SelectItem>
                                    <SelectItem value="it">ลาอื่นๆ</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" size="icon">
                                <Eraser className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    {Object.keys(statusMap).map((key) => (
                        <TabsContent key={key} value={key}>
                            {renderTable(key as keyof typeof statusMap)}
                        </TabsContent>
                    ))}
                </Tabs>
                <div className="mt-4 flex items-center justify-end space-x-2">
                    <Button variant="outline" size="sm">ก่อนหน้า</Button>
                    <Button variant="outline" size="sm" className="bg-blue-800 text-white hover:bg-blue-900">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">ถัดไป</Button>
                </div>
            </CardContent>
        </Card>
    )
}
