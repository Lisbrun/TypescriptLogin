import { Request, Response } from 'express'
import { validateLogin } from '../Schemas/loginSchema'
import { createUser, loginUser } from '../Models/modelLogin'
import { dataInput } from '../types/type'

export const getAllUsers = (req: Request, res: Response): void => {
  const sessionData = req.session
  if (
    sessionData !== undefined &&
    sessionData !== null &&
    sessionData.loggedin === true
  ) {
    res.status(200).json({ message: 'ok you are logged' })
  } else {
    res.status(400).json({ message: 'you are not logged' })
  }
}

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data: dataInput = req.body
  const result = validateLogin(data)
  if (!result.success) {
    const errorMessage = result.error?.message ?? 'Invalid data'
    res.status(400).json({ message: JSON.parse(errorMessage) })
  } else {
    await createUser(data)
    const sessionData = req.session
    sessionData.loggedin = true
    sessionData.Username = data.email
    res.status(200).json({ message: 'ok you are logged' })
  }
}

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data: dataInput = req.body
  const result = await loginUser(data)
  if (result !== false) {
    req.session.loggedin = true
    req.session.Username = data.email
    res.status(200).json({ message: 'ok you are logged' })
  } else {
    res.status(400).json({ message: 'password or email dont match' })
  }
}

export const logoutUser = (req: Request, res: Response): void => {
  const sessionData = req.session
  if (sessionData.loggedin === true) {
    sessionData.destroy((err) => {
      if (err === null) {
        res.status(400).json({ message: 'Error al cerrar sesión' })
      } else {
        res.status(200).json({ message: 'Has cerrado la sesión exitosamente' })
      }
    })
  } else {
    res.status(400).json({ message: 'No has iniciado sesión' })
  }
}
