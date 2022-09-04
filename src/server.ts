import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import { connectionSource } from "./dataSource";
import "./database";

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;
connectionSource;

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, HOST, () => console.log("server is running"));
