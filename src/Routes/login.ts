/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
  getAllUsers,
  createUserController,
  loginUserController,
  logoutUser
} from '../Controller/Controller'

export const routerLogin = Router()

routerLogin.get('/login', getAllUsers)

routerLogin.post('/createUser', createUserController)

routerLogin.post('/login', loginUserController)

routerLogin.get('/logout', logoutUser)
