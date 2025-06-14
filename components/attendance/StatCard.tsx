import React from 'react'
import { CheckCircle, Clock, Briefcase, XCircle } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  type: 'onTime' | 'late' | 'leave' | 'absent'
}

const StatCard = ({ label, value, type }: StatCardProps) => {
  const getBgColor = (type: string) => {
    switch (type) {
      case 'onTime':
        return 'bg-green-100 text-green-700'
      case 'late':
        return 'bg-yellow-100 text-yellow-700'
      case 'leave':
        return 'bg-blue-100 text-blue-700'
      case 'absent':
        return 'bg-red-100 text-red-700'
      default:
        return ''
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'onTime':
        return <CheckCircle className="h-10 w-10 text-green-700" />
      case 'late':
        return <Clock className="h-10 w-10 text-yellow-700" />
      case 'leave':
        return <Briefcase className="h-10 w-10 text-blue-700" />
      case 'absent':
        return <XCircle className="h-10 w-10 text-red-700" />
      default:
        return null
    }
  }

  return (
    <div className={`rounded-lg border shadow-sm p-4 ${getBgColor(type)}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm">{label}</div>
          <div className="mt-1 text-2xl font-bold">{value}</div>
        </div>
        {getIcon(type)}
      </div>
    </div>
  )
}

export default StatCard
