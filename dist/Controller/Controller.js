import { validateLogin } from '../Schemas/loginSchema';
export const getAllUsers = (req, res) => {
    res.status(200).json({ message: 'ok' });
};
export const verifyUser = (req, res) => {
    const data = req.body;
    const result = validateLogin(data);
    if (!result.success) {
        res.status(400).json({ message: result.error?.message });
    }
    res.status(200).json({ message: result.data });
};
