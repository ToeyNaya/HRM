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

// getDepartmentAll
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const query = `
      SELECT * FROM departments
    `;
    const [rows] = await db.query(query);
    return sendResponse(res, 200, 'success', 'Departments retrieved successfully', rows);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

