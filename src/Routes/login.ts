import { Router } from 'express'
import { getAllUsers, createUserController } from '../Controller/Controller'

export const routerLogin = Router()

routerLogin.get('/login', getAllUsers)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routerLogin.post('/login', createUserController)
