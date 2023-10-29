import { z } from 'zod';
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
    cedula: z.number().min(8).max(12)
});
const registerSchema = loginSchema.extend({
    confirmPassword: z.string().min(8).max(100)
});
registerSchema.refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden'
});
export function validateLogin(input) {
    return loginSchema.safeParse(input);
}
export function validateRegister(input) {
    return registerSchema.safeParse(input);
}
