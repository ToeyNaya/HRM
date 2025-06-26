import { Router, Request, Response } from 'express';
import { getLeaveRequestsByEmployeeId } from '../controllers/leaveController';
const router = Router();

router.get('/leave/:id', (req: Request, res: Response, next) => {
    getLeaveRequestsByEmployeeId(req, res).catch(next);
  });

  export default router;