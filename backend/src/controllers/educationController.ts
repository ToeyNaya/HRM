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

// getEducationByEmployeeId
export const getEducationByEmployeeId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const query = `
      SELECT education.degree, 
             education.field, 
             education.institution, 
             education.year
      FROM education
      WHERE education.empID = ?`;

    const [rows]: [any[], any] = await db.query(query, [id]);

    if (!rows || rows.length === 0) {
      return sendResponse(res, 404, 'error', 'Education not found');
    }

    return sendResponse(res, 200, 'success', 'Education retrieved successfully', rows);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

