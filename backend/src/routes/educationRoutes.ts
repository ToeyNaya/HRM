import { Router, Request, Response } from 'express';
import { getEducationByEmployeeId } from '../controllers/educationController';
const router = Router();

router.get('/edu/:id', (req: Request, res: Response, next) => {
    getEducationByEmployeeId(req, res).catch(next);
  });

  export default router;