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

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const query = `
      SELECT employees.*, departments.departmentName
      FROM employees
      JOIN departments ON employees.departmentID = departments.departmentID
      ORDER BY employees.empID ASC
    `;
    const [rows] = await db.query(query);
    return sendResponse(res, 200, 'success', 'Employees retrieved successfully', rows);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

// getEmployeeById
export const getEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const query = `
      SELECT employees.*, 
             departments.departmentName,
             GROUP_CONCAT(CONCAT_WS(', ', addresses.houseNumber, addresses.subdistrict, addresses.district, addresses.province,  addresses.country, addresses.postalCode) SEPARATOR '; ') AS fullAddress
      FROM employees
      JOIN departments ON employees.departmentID = departments.departmentID
      LEFT JOIN addresses ON employees.empID = addresses.empID
      WHERE employees.empID = ?`;

    const [rows] = await db.query(query, [id]);
    const employee = (rows as any[])[0];

    if (!employee) {
      return sendResponse(res, 404, 'error', 'Employee not found');
    }

    return sendResponse(res, 200, 'success', 'Employee retrieved successfully', employee);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};


export const addEmployee = async (req: Request, res: Response) => {
  const { firstName, lastName, gender, birthDate, position, departmentID, hireDate, salary, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !salary) {
    return sendResponse(res, 400, 'error', 'First name, last name, email, and salary are required');
  }

  try {
    const [result] = await db.query(
      'INSERT INTO employees (firstName, lastName, gender, birthDate, position, departmentID, hireDate, salary, email, phone, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, gender, birthDate, position, departmentID, hireDate, salary, email, phone, password]
    );
    const insertResult = result as ResultSetHeader;
    return sendResponse(res, 201, 'success', 'Employee created successfully', {
      empID: insertResult.insertId,
      firstName,
      lastName,
      email,
      salary,
    });
  } catch (error: any) {
    console.error('DB Error:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      return sendResponse(res, 409, 'error', 'Email already exists');
    }

    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

export const searchEmployees = async (req: Request, res: Response) => {
  const { q } = req.body;

  if (!q || typeof q !== 'string') {
    return sendResponse(res, 400, 'error', 'Search term "q" is required and must be a string');
  }

  try {
    const query = `
      SELECT * FROM employees
      WHERE empID LIKE ? OR firstName LIKE ? OR lastName LIKE ? OR email LIKE ?
    `;
    const likeQ = `%${q}%`;

    const [rows] = await db.query(query, [likeQ, likeQ, likeQ, likeQ]);

    if ((rows as any[]).length === 0) {
      return sendResponse(res, 404, 'error', 'No employees found matching the search query');
    }

    return sendResponse(res, 200, 'success', 'Employees retrieved successfully', rows);
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query('SELECT * FROM employees WHERE empID = ?', [id]);
    const employee = (rows as any[])[0];

    if (!employee) {
      return sendResponse(res, 404, 'error', 'Employee not found');
    }

    // Delete the employee
    await db.query('DELETE FROM employees WHERE empID = ?', [id]);

    return sendResponse(res, 200, 'success', 'Employee deleted successfully');
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, gender, birthDate, position, departmentID, hireDate, salary, email, phone, password } = req.body;

  try {
    // Check if the employee exists
    const [rows] = await db.query('SELECT * FROM employees WHERE empID = ?', [id]);
    const employee = (rows as any[])[0];

    if (!employee) {
      return sendResponse(res, 404, 'error', 'Employee not found');
    }

    // Update the employee
    await db.query(
      'UPDATE employees SET firstName = ?, lastName = ?, gender = ?, birthDate = ?, position = ?, departmentID = ?, hireDate = ?, salary = ?, email = ?, phone = ?, password = ? WHERE empID = ?',
      [firstName, lastName, gender, birthDate, position, departmentID, hireDate, salary, email, phone, password, id]
    );

    return sendResponse(res, 200, 'success', 'Employee updated successfully');
  } catch (error) {
    console.error('DB Error:', error);
    return sendResponse(res, 500, 'error', 'Internal server error');
  }
};




