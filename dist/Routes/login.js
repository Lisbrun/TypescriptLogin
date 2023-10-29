import { Router } from 'express';
import { getAllUsers, verifyUser } from '../Controller/Controller';
export const routerLogin = Router();
routerLogin.get('/login', getAllUsers);
routerLogin.post('/login', verifyUser);
