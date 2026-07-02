import pool from "../../configs/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../configs/config.js";

export async function register(registerData) {
    let { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
        registerData.email,
    ]);
    if (rows.length > 0) {
        throw { status: 400, message: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(registerData.password, 10);

    const result = await pool.query(
        "INSERT INTO users(school_id, first_name, middle_name, last_name, role, organization, email, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [
            registerData.schoolId,
            registerData.firstName,
            registerData.middleName,
            registerData.lastName,
            registerData.role,
            registerData.organization,
            registerData.email,
            hashedPassword,
        ],
    );

    const user = result.rows[0];

    const token = jwt.sign({ userId: user.id }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });

    const { password: _, ...safeUser } = user;
    return { token, user: safeUser };
}

export async function login(email, password) {
    let { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);
    const user = rows[0];
    if (!user) {
        throw { status: 400, message: "Invalid credentials" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw { status: 400, message: "Invalid credentials" };
    }

    const token = jwt.sign({ userId: user.id }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });

    const { password: _, ...safeUser } = user;
    return { token, user: safeUser };
}
