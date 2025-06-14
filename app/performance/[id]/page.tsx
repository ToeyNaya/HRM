"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BarChart3, Star } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

// ข้อมูลจำลองสำหรับการประเมินผล
const performanceData = {
  id: "1",
  employee: {
    id: "EMP001",
    name: "สมชาย ใจดี",
    position: "ผู้จัดการฝ่ายขาย",
    department: "ฝ่ายขาย",
  },
  period: "ไตรมาสที่ 2/2567",
  evaluationDate: "30/06/2567",
  evaluator: "นายวิชัย ผู้จัดการ",
  overallScore: 85,
  rating: "ดีมาก",
  categories: [
    { name: "ผลงานตามเป้าหมาย", score: 90, weight: 40, comment: "ทำยอดขายได้เกินเป้าหมายที่กำหนด" },
    { name: "ทักษะการทำงาน", score: 85, weight: 25, comment: "มีทักษะการทำงานที่ดี สามารถแก้ไขปัญหาได้อย่างมีประสิทธิภาพ" },
    { name: "การทำงานเป็นทีม", score: 80, weight: 20, comment: "สามารถทำงานร่วมกับทีมได้ดี มีการสื่อสารที่ชัดเจน" },
    { name: "ความเป็นผู้นำ", score: 75, weight: 15, comment: "ควรพัฒนาทักษะความเป็นผู้นำเพิ่มเติม" },
  ],
  strengths: [
    "มีความสามารถในการขายและการเจรจาต่อรองที่ดีเยี่ยม",
    "มีความรับผิดชอบสูง ทำงานได้ตามเป้าหมายและกำหนดเวลา",
    "มีทักษะการสื่อสารที่ดี สามารถอธิบายข้อมูลที่ซับซ้อนให้เข้าใจง่าย",
  ],
  areasForImprovement: [
    "ควรพัฒนาทักษะความเป็นผู้นำเพิ่มเติม",
    "ควรเพิ่มความรู้เกี่ยวกับผลิตภัณฑ์ใหม่ๆ",
    "ควรปรับปรุงการจัดการเวลาในบางสถานการณ์",
  ],
  developmentGoals: [
    {
      goal: "พัฒนาทักษะความเป็นผู้นำผ่านการฝึกอบรม",
      deadline: "31/08/2567",
      progress: 30,
    },
    {
      goal: "เพิ่มยอดขายอีก 15% ในไตรมาสถัดไป",
      deadline: "30/09/2567",
      progress: 60,
    },
    {
      goal: "พัฒนาทักษะการนำเสนองานต่อลูกค้า",
      deadline: "15/07/2567",
      progress: 100,
    },
  ],
  comments:
    "คุณสมชายมีผลงานที่ดีมากในไตรมาสนี้ สามารถทำยอดขายได้เกินเป้าหมายที่กำหนด มีทักษะการทำงานที่ดี และสามารถทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ อย่างไรก็ตาม ควรพัฒนาทักษะความเป็นผู้นำเพิ่มเติม",
}

export default function PerformanceDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { user } = useAuth()
  const isHR = user?.role === "hr"

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">รายละเอียดการประเมินผล</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>การประเมินผลงาน {performanceData.period}</CardTitle>
              <CardDescription>
                พนักงาน: {performanceData.employee.name} ({performanceData.employee.position})
              </CardDescription>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="fill-yellow-500 h-5 w-5" />
              <Star className="fill-yellow-500 h-5 w-5" />
              <Star className="fill-yellow-500 h-5 w-5" />
              <Star className="fill-yellow-500 h-5 w-5" />
              <Star className="h-5 w-5" />
              <span className="ml-2 text-sm text-gray-700">{performanceData.rating} (4/5)</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">วันที่ประเมิน</p>
              <p>{performanceData.evaluationDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">ผู้ประเมิน</p>
              <p>{performanceData.evaluator}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">แผนก</p>
              <p>{performanceData.employee.department}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">คะแนนรวม</p>
              <p>{performanceData.overallScore}/100</p>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm font-medium">คะแนนรวม</div>
              <div className="text-sm font-medium">{performanceData.overallScore}/100</div>
            </div>
            <Progress
              value={performanceData.overallScore}
              className="h-2 w-full bg-gray-200"
              indicatorClassName="bg-blue-800"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">คะแนนตามหมวดหมู่</h3>
            {performanceData.categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-xs text-muted-foreground">น้ำหนัก: {category.weight}%</p>
                  </div>
                  <p className="font-medium">{category.score}/100</p>
                </div>
                <Progress value={category.score} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                <p className="text-sm text-muted-foreground">{category.comment}</p>
              </div>
            ))}
          </div>

          <Separator />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-medium">จุดแข็ง</h3>
              <ul className="space-y-2">
                {performanceData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 rounded-full bg-green-100 p-1">
                      <BarChart3 className="h-3 w-3 text-green-800" />
                    </span>
                    <span className="text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium">สิ่งที่ควรปรับปรุง</h3>
              <ul className="space-y-2">
                {performanceData.areasForImprovement.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 rounded-full bg-yellow-100 p-1">
                      <BarChart3 className="h-3 w-3 text-yellow-800" />
                    </span>
                    <span className="text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">เป้าหมายการพัฒนา</h3>
            <div className="space-y-4">
              {performanceData.developmentGoals.map((goal, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-medium">{goal.goal}</p>
                    <p className="text-sm text-muted-foreground">กำหนดเสร็จ: {goal.deadline}</p>
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-sm font-medium">ความคืบหน้า</div>
                    <div className="text-sm font-medium">{goal.progress}%</div>
                  </div>
                  <Progress value={goal.progress} className="h-2 w-full bg-gray-200" indicatorClassName="bg-blue-800" />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-medium">ความคิดเห็นจากผู้ประเมิน</h3>
            <p className="text-sm">{performanceData.comments}</p>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={() => router.back()}>
              กลับ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
