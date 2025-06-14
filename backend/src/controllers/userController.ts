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

export const getUsers = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    return sendResponse(res, 200, 'success', 'Users retrieved successfully', rows);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const user = (rows as any[])[0];
    if (!user) {
      return sendResponse(res, 404, 'error', 'User not found');
    }
    return sendResponse(res, 200, 'success', 'User retrieved successfully', user);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return sendResponse(res, 400, 'error', 'Name and email are required');
  }

  try {
    const [result] = await db.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    const insertResult = result as ResultSetHeader;
    return sendResponse(res, 201, 'success', 'User created successfully', {
      id: insertResult.insertId,
      name,
      email,
    });
  } catch (error: any) {
    console.error('DB Error:', error);

    // ✅ ตรวจว่าเป็น error ซ้ำค่า (Duplicate entry)
    if (error.code === 'ER_DUP_ENTRY') {
      return sendResponse(res, 409, 'error', 'Email already exists');
    }

    // ✅ ตรวจสอบอื่น ๆ ได้อีก เช่น connection error
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};


export const searchUsers = async (req: Request, res: Response) => {
  const { q } = req.body;

  if (!q || typeof q !== 'string') {
    return sendResponse(res, 400, 'error', 'Search term "q" is required and must be a string');
  }

  try {
    const query = `
      SELECT * FROM users
      WHERE id LIKE ? OR name LIKE ? OR email LIKE ?
    `;
    const likeQ = `%${q}%`;

    const [rows] = await db.query(query, [likeQ, likeQ, likeQ]);

    if ((rows as any[]).length === 0) {
      return sendResponse(res, 404, 'error', 'No users found matching the search query');
    }

    return sendResponse(res, 200, 'success', 'Users retrieved successfully', rows);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

