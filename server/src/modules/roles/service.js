import pool from "../../configs/db";

export async function getRoles() {
    const roles = await pool.query("SELECT * FROM roles");
}
