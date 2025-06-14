"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-context"
import { AlertTriangle } from "lucide-react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // ตรวจสอบข้อมูลการเข้าสู่ระบบอย่างง่าย (แบบ manual)
      if (username === "hr" && password === "hr123") {
        login({ username, role: "hr", name: "ผู้ดูแลระบบ HR" })
        toast({
          title: "เข้าสู่ระบบสำเร็จ",
          description: "ยินดีต้อนรับเข้าสู่ระบบ HR",
        })
        router.push("/")
      } else if (username === "employee" && password === "emp123") {
        login({ username, role: "employee", name: "สมชาย ใจดี" })
        toast({
          title: "เข้าสู่ระบบสำเร็จ",
          description: "ยินดีต้อนรับเข้าสู่ระบบพนักงาน",
        })
        router.push("/")
      } else {
        toast({
          title: "เข้าสู่ระบบไม่สำเร็จ",
          description: (
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-white" />
              <span>ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง</span>
            </div>
          ),
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">เข้าสู่ระบบ</CardTitle>
          <CardDescription>กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ HRM</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">ชื่อผู้ใช้ / รหัสพนักงาน</Label>
              <Input
                id="username"
                placeholder="กรอกชื่อผู้ใช้ / รหัสพนักงาน"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">รหัสผ่าน</Label>
              <Input
                id="password"
                type="password"
                placeholder="กรอกรหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <p>สำหรับทดสอบระบบ:</p>
              <p>HR: username = hr, password = hr123</p>
              <p>พนักงาน: username = employee, password = emp123</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900" disabled={isLoading}>
              {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
