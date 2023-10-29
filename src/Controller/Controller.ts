import { Request, Response } from 'express'
import { validateLogin } from '../Schemas/loginSchema'
import { createUser } from '../Models/modelLogin'
import { dataInput } from '../types/type'

export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'ok' })
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
    const result = await createUser(data)
    const sessionData = req.session
    sessionData.loggedin = true
    sessionData.Username = data.email
    res.status(200).json({ message: 'ok you are logged' })
  }
}
