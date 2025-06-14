import { Router, Request, Response } from 'express';
import { getUsers, getUserById, addUser, searchUsers } from '../controllers/userController';

const router = Router();

router.get('/users', (req: Request, res: Response, next) => {
	getUsers(req, res).catch(next);
});
router.get('/users/:id', (req: Request, res: Response) => {
	getUserById(req, res);
});
router.post('/users', (req: Request, res: Response, next) => {
	addUser(req, res).catch(next);
});

router.post('/users/search', (req: Request, res: Response, next) => {
	searchUsers(req, res).catch(next);
});

export default router;
