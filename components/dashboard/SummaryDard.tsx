import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const summaryData = [
  {
    title: 'พนักงานทั้งหมด',
    value: '245',
    description: 'เพิ่มขึ้น 12% จากเดือนที่แล้ว',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-white">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'การลาทั้งหมด',
    value: '15',
    description: 'ลดลง 5% จากเดือนที่แล้ว',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-white">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    )
  },
  {
    title: 'ตำแหน่งว่าง',
    value: '8',
    description: 'เพิ่มขึ้น 2 ตำแหน่งจากเดือนที่แล้ว',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-white">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    title: 'การฝึกอบรม',
    value: '5',
    description: 'กำลังดำเนินการ 3 หลักสูตร',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-white">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
]

const SummaryDard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item, index) => (
        <Card className='shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300' key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 p-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-t-lg">
            <CardTitle className="text-sm font-medium text-white">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent className='mt-2'>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SummaryDard
