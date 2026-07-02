import express from "express";
import config from "./configs/config.js";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(
    cors({
        origin: config.server.clientUrl,
    }),
);

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});
