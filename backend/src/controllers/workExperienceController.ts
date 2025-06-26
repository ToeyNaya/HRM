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

// getWorkExperienceByEmployeeId
export const getWorkExperienceByEmployeeId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const query = `
        SELECT work_experience.position, 
               work_experience.company, 
               work_experience.startDate, 
               work_experience.endDate, 
               work_experience.description
        FROM work_experience
        WHERE work_experience.empID = ?`;

        const [rows]: [any[], any] = await db.query(query, [id]);

        if (!rows || rows.length === 0) {
            return sendResponse(res, 404, 'error', 'Work experience not found');
        }

        return sendResponse(res, 200, 'success', 'Work experience retrieved successfully', rows);
    } catch (error) {
        console.error('DB Error:', error);
        return sendResponse(res, 500, 'error', 'Internal server error');
    }
};


