import "dotenv/config";

const config = {
    server: {
        port: process.env.PORT || 3001,
        clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
        nodeEnv: process.env.NODE_ENV || "development",
    },
    db: {
        url: process.env.DATABASE_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    },
};

const required = ["DATABASE_URL", "JWT_SECRET"];

for (const key of required) {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

export default config;
