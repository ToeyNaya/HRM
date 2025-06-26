// Exporter.ts

import Papa from "papaparse";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Employee {
  empID: string;
  firstName: string;
  lastName: string;
  position: string;
  departmentName: string;
  email: string;
  status: string;
}

class Exporter {
  private data: Employee[];
  private tableHeaders: string[];

  constructor(data: Employee[], tableHeaders: string[]) {
    this.data = data;
    this.tableHeaders = tableHeaders;
  }

  private formatDataForExport() {
    return this.data.map((emp) => [
      emp.empID,
      `${emp.firstName} ${emp.lastName}`,
      emp.position,
      emp.departmentName,
      emp.email,
      emp.status || "ทำงาน", // Defaulting status if not available
    ]);
  }

  public exportCSV() {
    const data = [this.tableHeaders, ...this.formatDataForExport()];
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "employees.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  public exportExcel() {
    const wsData = [
      this.tableHeaders,
      ...this.formatDataForExport(),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employees");
    XLSX.writeFile(wb, "employees.xlsx");
  }

  public exportPDF() {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [this.tableHeaders],
      body: this.formatDataForExport(),
    });
    doc.save("employees.pdf");
  }
}

export default Exporter;
