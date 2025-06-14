"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { EmployeeStats } from "@/components/dashboard/employee-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SummaryDard from "@/components/dashboard/SummaryDard"
import { useEffect, useRef, useState } from "react"
import { Activity, ChartColumn, ChartPie, FileChartColumnIncreasing } from "lucide-react"
import { TabActivity } from "@/components/dashboard/TabActivity"

export default function Dashboard() {
  const statsCardRef = useRef<HTMLDivElement>(null);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
      <SummaryDard />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between bg-blue-600 rounded-t-lg mb-2">
            <div className="flex flex-col gap-y-2">
              <CardTitle className="text-white">ภาพรวมพนักงาน</CardTitle>
              <CardDescription className="text-blue-200">แยกเป็นรายเดือน</CardDescription>
            </div>
            <ChartColumn className="h-10 w-10 text-white" />
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card ref={statsCardRef} className={`col-span-3 ${isPortrait ? 'h-[30rem]' : ''}`}>
          <CardHeader className="flex flex-row items-center justify-between bg-blue-600 rounded-t-lg mb-2">
            <div className="flex flex-col gap-y-2">
              <CardTitle className="text-white">สถิติพนักงาน</CardTitle>
              <CardDescription className="text-blue-200">แยกตามแผนกและตำแหน่ง</CardDescription>
            </div>
            <ChartPie className="h-10 w-10 text-white" />
          </CardHeader>
          <CardContent>
            <EmployeeStats />
          </CardContent>
        </Card>
      </div>
      <TabActivity />
    </div>
  )
}
