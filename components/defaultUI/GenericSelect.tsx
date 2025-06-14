import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { Filter } from "lucide-react"

interface GenericSelectProps {
    data: string[]
    defaultValue?: string
    placeholder?: string
    widthClass?: string
    className?: string
}

export default function GenericSelect({
    data,
    defaultValue = "",
    placeholder = "เลือกตัวเลือก",
    widthClass = "w-[180px]",
    className
}: GenericSelectProps) {
    return (
        <div className={`flex gap-2 ${className}`}>
            <Select defaultValue={defaultValue}>
                <SelectTrigger className={`${widthClass} focus:ring-0 focus:ring-offset-0`}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {data.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item === "all" ? "ทั้งหมด" : item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
            </Button>
        </div>
    )
}
