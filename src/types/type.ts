export interface input {
  email: string
  password: string
  confirmPassword?: string
  cedula?: number
}

export interface register extends input {
  confirmPassword: string
}

export interface dataInput {
  email: string
  password: string
  cedula: number
}
