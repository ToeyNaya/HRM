"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "ฝ่ายบุคคล", value: 20, color: "#0F172A" },
  { name: "ฝ่ายการตลาด", value: 45, color: "#1E40AF" },
  { name: "ฝ่ายขาย", value: 60, color: "#3B82F6" },
  { name: "ฝ่ายไอที", value: 35, color: "#93C5FD" },
  { name: "ฝ่ายบัญชี", value: 30, color: "#BFDBFE" },
  { name: "ฝ่ายผลิต", value: 55, color: "#60A5FA" },
]

export function EmployeeStats() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                        <span className="font-bold text-muted-foreground">{payload[0].value} คน</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="pb-4 grid grid-cols-3 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
