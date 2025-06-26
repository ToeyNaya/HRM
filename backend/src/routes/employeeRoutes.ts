import { Router, Request, Response } from 'express';
import { getEmployees,getEmployeeById,addEmployee,searchEmployees,updateEmployee,deleteEmployee } from '../controllers/employeeController';

const router = Router();

router.get('/emp', (req: Request, res: Response, next) => {
	getEmployees(req, res).catch(next);
  });
  
  router.get('/emp/:id', (req: Request, res: Response) => {
	getEmployeeById(req, res);
  });
  
  router.post('/emp', (req: Request, res: Response, next) => {
	addEmployee(req, res).catch(next);
  });
  
  router.post('/emp/search', (req: Request, res: Response, next) => {
	searchEmployees(req, res).catch(next);
  });
  
  router.put('/emp/:id', (req: Request, res: Response, next) => {
	updateEmployee(req, res).catch(next);
  });
  
  router.delete('/emp/:id', (req: Request, res: Response, next) => {
	deleteEmployee(req, res).catch(next);
  });
  

export default router;
