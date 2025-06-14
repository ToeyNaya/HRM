import React from 'react'
import { CardDescription, CardHeader, CardTitle } from './card'

interface HeaderCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function HeaderCard({ title, description, icon }: HeaderCardProps) {
  return (
    <CardHeader className="flex flex-row items-center gap-4 bg-blue-600 rounded-t-lg mb-2">
      {icon}
      <div className="flex flex-col gap-y-2">
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-blue-200">{description}</CardDescription>
      </div>
      
    </CardHeader>
  )
}
