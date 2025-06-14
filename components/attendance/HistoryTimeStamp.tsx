import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { HeaderCard } from '../ui/HeaderCard'
import { TableOfContents } from 'lucide-react'

export function HistoryTimeStamp() {
    return (
        <Card>
            <HeaderCard
                title="ประวัติการลงเวลา"
                description="ประวัติการลงเวลาทำงานของคุณ 2567"
                icon={<TableOfContents className="h-10 w-10 text-white" />}
            />
            <CardContent>
                <Tabs defaultValue="daily">
                    <TabsList className="bg-blue-600 text-white mb-4">
                        <TabsTrigger value="daily">รายวัน</TabsTrigger>
                        <TabsTrigger value="weekly">รายสัปดาห์</TabsTrigger>
                        <TabsTrigger value="monthly">รายเดือน</TabsTrigger>
                    </TabsList>
                    <TabsContent value="daily">
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>วันที่</TableHead>
                                        <TableHead>เวลาเข้างาน</TableHead>
                                        <TableHead>เวลาออกงาน</TableHead>
                                        <TableHead>ชั่วโมงทำงาน</TableHead>
                                        <TableHead>สถานะ</TableHead>
                                        <TableHead className="text-right">จัดการ</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>12/06/2567</TableCell>
                                        <TableCell>08:30:45</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>
                                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">กำลังทำงาน</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>11/06/2567</TableCell>
                                        <TableCell>08:55:12</TableCell>
                                        <TableCell>17:30:05</TableCell>
                                        <TableCell>8.5 ชั่วโมง</TableCell>
                                        <TableCell>
                                            <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">มาสาย</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10/06/2567</TableCell>
                                        <TableCell>08:45:30</TableCell>
                                        <TableCell>17:45:22</TableCell>
                                        <TableCell>9 ชั่วโมง</TableCell>
                                        <TableCell>
                                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">ปกติ</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>09/06/2567</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>
                                            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">ลา</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>08/06/2567</TableCell>
                                        <TableCell>08:30:15</TableCell>
                                        <TableCell>17:30:45</TableCell>
                                        <TableCell>9 ชั่วโมง</TableCell>
                                        <TableCell>
                                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">ปกติ</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsContent>
                    <TabsContent value="weekly">
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>สัปดาห์</TableHead>
                                        <TableHead>วันเริ่มต้น</TableHead>
                                        <TableHead>วันสิ้นสุด</TableHead>
                                        <TableHead>ชั่วโมงทำงานรวม</TableHead>
                                        <TableHead>มาสาย</TableHead>
                                        <TableHead>ลา</TableHead>
                                        <TableHead className="text-right">จัดการ</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>สัปดาห์ที่ 2</TableCell>
                                        <TableCell>08/06/2567</TableCell>
                                        <TableCell>14/06/2567</TableCell>
                                        <TableCell>26.5 ชั่วโมง</TableCell>
                                        <TableCell>1 วัน</TableCell>
                                        <TableCell>1 วัน</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>สัปดาห์ที่ 1</TableCell>
                                        <TableCell>01/06/2567</TableCell>
                                        <TableCell>07/06/2567</TableCell>
                                        <TableCell>45 ชั่วโมง</TableCell>
                                        <TableCell>1 วัน</TableCell>
                                        <TableCell>0 วัน</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsContent>
                    <TabsContent value="monthly">
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>เดือน</TableHead>
                                        <TableHead>ชั่วโมงทำงานรวม</TableHead>
                                        <TableHead>มาตรงเวลา</TableHead>
                                        <TableHead>มาสาย</TableHead>
                                        <TableHead>ลา</TableHead>
                                        <TableHead>ขาดงาน</TableHead>
                                        <TableHead className="text-right">จัดการ</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>มิถุนายน 2567</TableCell>
                                        <TableCell>71.5 ชั่วโมง</TableCell>
                                        <TableCell>8 วัน</TableCell>
                                        <TableCell>2 วัน</TableCell>
                                        <TableCell>1 วัน</TableCell>
                                        <TableCell>0 วัน</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>พฤษภาคม 2567</TableCell>
                                        <TableCell>180 ชั่วโมง</TableCell>
                                        <TableCell>20 วัน</TableCell>
                                        <TableCell>3 วัน</TableCell>
                                        <TableCell>2 วัน</TableCell>
                                        <TableCell>0 วัน</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">
                                                ดูรายละเอียด
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsContent>
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