import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FilePenLine, Mail, MapPin, Phone, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from "@/components/ui/badge"


export function ProfileDetail() {
    return (
        <Card className="md:col-span-1">
            <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="@user" />
                        <AvatarFallback className="text-lg">สช</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-xl font-bold">สมชาย ใจดี</h2>
                    <p className="text-sm text-muted-foreground">ผู้จัดการฝ่ายขาย</p>
                    <Badge className="mt-2 bg-blue-800">พนักงานประจำ</Badge>
                    <div className="mt-6 w-full space-y-4">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">somchai@example.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">089-123-4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">กรุงเทพมหานคร, ประเทศไทย</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">รหัสพนักงาน: EMP001</span>
                        </div>
                    </div>
                    <Button className="flex items-center mt-6 w-full bg-blue-800 hover:bg-blue-900">
                        <FilePenLine />แก้ไขโปรไฟล์</Button>
                </div>
            </CardContent>
        </Card>
    )
}