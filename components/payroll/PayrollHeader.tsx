import React from 'react'
import { Button } from '../ui/button'
import { Download, Receipt } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { HeaderCard } from '../ui/HeaderCard'

export function PayrollHeader() {
    return (
        <Card>
            <HeaderCard
                title="สลิปเงินเดือนล่าสุด"
                description="สลิปเงินเดือนประจำเดือนพฤษภาคม 2567"
                icon={<Receipt className="h-10 w-10 text-white" />}
            />
            <CardContent>
                <div className="rounded-lg border p-6">
                    <div className="mb-6 flex flex-col items-center justify-center border-b pb-6 text-center">
                        <h2 className="text-xl font-bold">สลิปเงินเดือน</h2>
                        <p className="text-muted-foreground">ประจำเดือนพฤษภาคม 2567</p>
                    </div>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">ชื่อพนักงาน</p>
                            <p className="font-medium">สมชาย ใจดี</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">รหัสพนักงาน</p>
                            <p className="font-medium">EMP001</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">ตำแหน่ง</p>
                            <p className="font-medium">ผู้จัดการฝ่ายขาย</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">แผนก</p>
                            <p className="font-medium">ฝ่ายขาย</p>
                        </div>
                    </div>
                    <div className="mb-6 border-b pb-6">
                        <h3 className="mb-4 font-medium">รายได้</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>เงินเดือนพื้นฐาน</span>
                                <span>45,000.00 บาท</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ค่าตำแหน่ง</span>
                                <span>5,000.00 บาท</span>
                            </div>
                            <div className="flex justify-between">
                                <span>โบนัส</span>
                                <span>10,000.00 บาท</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>รวมรายได้</span>
                                <span>60,000.00 บาท</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 border-b pb-6">
                        <h3 className="mb-4 font-medium">รายการหัก</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>ภาษีเงินได้</span>
                                <span>3,500.00 บาท</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ประกันสังคม</span>
                                <span>750.00 บาท</span>
                            </div>
                            <div className="flex justify-between">
                                <span>กองทุนสำรองเลี้ยงชีพ</span>
                                <span>2,250.00 บาท</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>รวมรายการหัก</span>
                                <span>6,500.00 บาท</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-blue-50 p-4 text-lg font-bold">
                        <span>เงินเดือนสุทธิ</span>
                        <span>53,500.00 บาท</span>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button className="flex gap-2 bg-blue-800 hover:bg-blue-900">
                            <Download className="h-4 w-4" />
                            ดาวน์โหลด PDF
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}