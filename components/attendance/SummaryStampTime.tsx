import React from 'react'
import { Card, CardContent } from '../ui/card'
import { HeaderCard } from '../ui/HeaderCard'
import { FileChartColumn } from 'lucide-react'
import StatCard from './StatCard' // นำเข้า StatCard คอมโพเนนต์

export function SummaryStampTime() {
  const stats: { label: string; value: string; type: 'onTime' | 'late' | 'leave' | 'absent' }[] = [
    { label: 'มาตรงเวลา', value: '8 วัน', type: 'onTime' },
    { label: 'มาสาย', value: '2 วัน', type: 'late' },
    { label: 'ลา', value: '1 วัน', type: 'leave' },
    { label: 'ขาดงาน', value: '0 วัน', type: 'absent' },
  ]

  return (
    <Card>
      <HeaderCard
        title="สรุปการลงเวลาประจำเดือน"
        description="สรุปข้อมูลการลงเวลาประจำเดือนมิถุนายน 2567"
        icon={<FileChartColumn className="h-10 w-10 text-white" />}
      />
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} type={stat.type} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}