import React from 'react'
import { Card, CardContent } from '../ui/card'
import { HeaderCard } from '../ui/HeaderCard'
import { CalendarPlus, Sun, HeartPulse, Home, FileText } from 'lucide-react'

const leaveData = [
  {
    type: "ลาพักร้อน",
    used: 8,
    total: 15,
    icon: <Sun className="h-6 w-6 text-blue-600" />,
  },
  {
    type: "ลาป่วย",
    used: 28,
    total: 30,
    icon: <HeartPulse className="h-6 w-6 text-red-600" />,
  },
  {
    type: "ลากิจ",
    used: 5,
    total: 10,
    icon: <Home className="h-6 w-6 text-yellow-600" />,
  },
  {
    type: "ลาอื่นๆ",
    used: 2,
    total: 5,
    icon: <FileText className="h-6 w-6 text-gray-600" />,
  },
]

export function RemainingLeave() {
  return (
    <Card>
      <HeaderCard
        title="สรุปวันลาคงเหลือ"
        description="จำนวนวันลาคงเหลือของคุณในปีนี้"
        icon={<CalendarPlus className="h-10 w-10 text-white" />}
      />
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5">
          {leaveData.map((item, index) => {
            const percent = Math.round((item.used / item.total) * 100)
            return (
              <div key={index} className="rounded-lg border shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-gray-700">{item.type}</div>
                  {item.icon}
                </div>
                <div className="mt-1 flex items-baseline">
                  <div className="text-2xl font-bold">{item.used}</div>
                  <div className="ml-1 text-sm text-muted-foreground">/ {item.total} วัน</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-800"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
