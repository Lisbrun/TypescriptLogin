import { z } from 'zod'
import { input, register } from '../types/type'

interface zodReturn {
  success: boolean
  data?: z.infer<typeof loginSchema>
  error?: z.ZodError
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  cedula: z.number().min(8)
})

const registerSchema = loginSchema.extend({
  confirmPassword: z.string().min(8).max(100)
})

registerSchema.refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden'
})

export function validateLogin (input: input): zodReturn {
  return loginSchema.safeParse(input)
}

export function validateRegister (input: register): zodReturn {
  return registerSchema.safeParse(input)
}
