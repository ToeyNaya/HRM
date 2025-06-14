"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Clock, ClockArrowDown, ClockArrowUp } from 'lucide-react'
import { HeaderCard } from '../ui/HeaderCard'


export function StampTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, []);

    const formatTime = (date: Date) =>
        date.toLocaleTimeString('th-TH', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

    const formatDateThai = (date: Date) => {
        const day = date.toLocaleDateString('th-TH', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        return day
    };

    return (
        <Card>
            <HeaderCard
                title="ลงเวลาวันนี้"
                description="บันทึกเวลาเข้าและออกงานประจำวัน"
                icon={<Clock className="h-10 w-10 text-white" />}
            />
            <CardContent>
                <div className="flex flex-col items-center justify-center gap-6 py-6">
                    <div className="text-center">
                        <div className="text-4xl font-bold">{formatTime(currentTime)}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{formatDateThai(currentTime)}</div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <Button className="flex gap-2 bg-blue-800 hover:bg-blue-900 text-lg ">
                            <ClockArrowDown className="h-4 w-4" />
                            ลงเวลาเข้างาน
                        </Button>
                        <Button variant="outline" className="flex gap-2 text-lg ">
                            <ClockArrowUp className="h-4 w-4" />
                            ลงเวลาออกงาน
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}