import { Router, Request, Response } from 'express';
import { getDepartments } from '../controllers/departmentController';
const router = Router();

router.get('/department', (req: Request, res: Response, next) => {
    getDepartments(req, res).catch(next);
  });

  export default router;