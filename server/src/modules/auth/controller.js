import * as AuthService from "./service.js";

export async function register(req, res) {
    try {
        const {
            schoolId,
            firstName,
            middleName,
            lastName,
            role,
            organization,
            email,
            password,
        } = req.body;
        const result = await AuthService.register({
            schoolId,
            firstName,
            middleName,
            lastName,
            role,
            organization,
            email,
            password,
        });
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        res.json(result);
    } catch (error) {
        console.error(error);
    }
}
