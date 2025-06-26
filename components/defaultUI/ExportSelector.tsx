// ExportSelector.tsx

import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Exporter from "@/lib/Exporter";

interface ExportSelectorProps {
    employees: any[]; // รับข้อมูลพนักงานจากพาเรนต์คอมโพเนนต์
    tableHeaders: string[]; // รับหัวตารางจากพาเรนต์คอมโพเนนต์
    widthClass?: string;
    className?: string;
}

const ExportSelector = ({ employees, tableHeaders, widthClass = "w-[180px]", className }: ExportSelectorProps) => {
    const [exportType, setExportType] = useState<string>("");

    const handleExport = (type: string) => {
        const exporter = new Exporter(employees, tableHeaders);

        switch (type) {
            case "csv":
                exporter.exportCSV();
                break;
            case "excel":
                exporter.exportExcel();
                break;
            case "pdf":
                exporter.exportPDF();
                break;
            default:
                alert("กรุณาเลือกประเภทการส่งออก");
        }
        setExportType("");
    };

    return (
        <div className={`flex gap-2 ${className}`}>
            <Select
                value={exportType}  // กำหนดค่าของ select ให้ตามค่าที่เลือก
                onValueChange={(value: string) => {
                    setExportType(value);  // เปลี่ยนค่าเมื่อเลือก
                    handleExport(value);  // ส่งออกทันทีเมื่อเลือกประเภท
                }}
                defaultValue=""  // ตั้งค่าตัวเลือกเริ่มต้น
            >
                <SelectTrigger className={`${widthClass}`}>
                    <SelectValue placeholder="ส่งออกข้อมูล" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="csv">Export CSV</SelectItem>
                    <SelectItem value="excel">Export Excel</SelectItem>
                    <SelectItem value="pdf">Export PDF</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ExportSelector;
