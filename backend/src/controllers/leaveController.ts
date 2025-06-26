import type { Request, Response } from 'express';
import { db } from '../config/db';
import { ResultSetHeader } from 'mysql2';

const sendResponse = (
    res: Response,
    statusCode: number,
    status: 'success' | 'error',
    message: string,
    data: any = null,
    errors: any = null
) => {
    return res.status(statusCode).json({ status, message, data, errors });
};

export const getLeaveRequestsByEmployeeId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const query = `
        SELECT 
          leaverequests.leaveType, 
          leaverequests.startDate, 
          leaverequests.endDate, 
          leaverequests.reason, 
          leaverequests.status,
          COUNT(leaverequests.leaveID) AS leaveCount,
          SUM(DATEDIFF(leaverequests.endDate, leaverequests.startDate) + 1) AS leaveDaysUsed
        FROM leaverequests
        WHERE leaverequests.empID = ?
        GROUP BY leaverequests.leaveType
      `;
  
      const [rows]: [any[], any] = await db.query(query, [id]);
  
      if (!rows || rows.length === 0) {
        return sendResponse(res, 404, 'error', 'Leave requests not found');
      }
  
      // กำหนดจำนวนครั้งที่สามารถลาได้ในแต่ละประเภท
      const maxLeaveCount = {
        annual: 15,  // ลาพักร้อน 15 ครั้งต่อปี
        sick: 30,    // ลาป่วย 30 ครั้งต่อปี
        personal: 10, // ลากิจ 10 ครั้งต่อปี
        other: 5     // ลาอื่นๆ 5 ครั้งต่อปี
      };
  
      // สร้างข้อมูลสรุปของการลา
      const leaveSummary = {
        annual: { used: 0, count: 0, maxCount: maxLeaveCount.annual },
        sick: { used: 0, count: 0, maxCount: maxLeaveCount.sick },
        personal: { used: 0, count: 0, maxCount: maxLeaveCount.personal },
        other: { used: 0, count: 0, maxCount: maxLeaveCount.other },
      };
  
      // คำนวณวันลาในแต่ละประเภท
      rows.forEach(row => {
        if (row.leaveType === 'ลาพักร้อน') {
          leaveSummary.annual.used = row.leaveDaysUsed;
          leaveSummary.annual.count = row.leaveCount;
        } else if (row.leaveType === 'ลาป่วย') {
          leaveSummary.sick.used = row.leaveDaysUsed;
          leaveSummary.sick.count = row.leaveCount;
        } else if (row.leaveType === 'ลากิจ') {
          leaveSummary.personal.used = row.leaveDaysUsed;
          leaveSummary.personal.count = row.leaveCount;
        } else {
          leaveSummary.other.used = row.leaveDaysUsed;
          leaveSummary.other.count = row.leaveCount;
        }
      });
  
      // ดึงข้อมูลคำขอลาแบบละเอียด
      const detailedLeaveQuery = `
        SELECT 
          leaveType, 
          startDate, 
          endDate, 
          reason, 
          status
        FROM leaverequests
        WHERE empID = ?
      `;
      const [detailedRows]: [any[], any] = await db.query(detailedLeaveQuery, [id]);
  
      return sendResponse(res, 200, 'success', 'Leave requests retrieved successfully', {
        detailedLeaveRequests: detailedRows,
        leaveSummary
      });
    } catch (error) {
      console.error('DB Error:', error);
      return sendResponse(res, 500, 'error', 'Internal server error');
    }
  };
  
  
