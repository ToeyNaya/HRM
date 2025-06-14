"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "ม.ค.", total: 210 },
  { name: "ก.พ.", total: 220 },
  { name: "มี.ค.", total: 235 },
  { name: "เม.ย.", total: 250 },
  { name: "พ.ค.", total: 240 },
  { name: "มิ.ย.", total: 230 },
  { name: "ก.ค.", total: 225 },
  { name: "ส.ค.", total: 235 },
  { name: "ก.ย.", total: 245 },
  { name: "ต.ค.", total: 260 },
  { name: "พ.ย.", total: 275 },
  { name: "ธ.ค.", total: 300 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">จำนวนพนักงาน</span>
                      <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="total" fill="#0F172A" radius={[4, 4, 0, 0]} className="fill-blue-800" />
      </BarChart>
    </ResponsiveContainer>
  )
}
