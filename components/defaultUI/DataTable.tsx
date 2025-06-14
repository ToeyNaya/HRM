import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { JSX } from "react"

interface DataTableProps {
    headers: string[]
    data: (string | JSX.Element)[][]
    headerClassName?: string
}

export default function DataTable({
    headers,
    data,
    headerClassName = "bg-blue-600 text-white",
}: DataTableProps) {
    return (
        <div className="rounded-md border overflow-hidden">
            <Table className="rounded-t-lg">
                <TableHeader className={headerClassName}>
                    <TableRow>
                        {headers.map((header, i) => (
                            <TableHead key={i} className={`text-white ${i === headers.length - 1 ? "text-center" : ""}`}>
                                {header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <TableCell key={colIndex} className={colIndex === headers.length - 1 ? "text-center align-middle" : ""}>
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
