import { Router, Request, Response } from 'express';
import { getWorkExperienceByEmployeeId } from '../controllers/workExperienceController';
const router = Router();

router.get('/work/:id', (req: Request, res: Response, next) => {
    getWorkExperienceByEmployeeId(req, res).catch(next);
  });

  export default router;