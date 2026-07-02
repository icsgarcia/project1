import pg from "pg";
import config from "./config.js";

const { Pool } = pg;

const pool = new Pool({
    connectionString: config.db.url,
    ssl: { rejectUnauthorized: false },
});

export default pool;
