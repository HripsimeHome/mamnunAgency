import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({ path: "./config.env" });
const dbName = process.env.DB_NAME || "";
const dbHost = process.env.DB_HOST || "";
const dbPassword = process.env.PASSWORD || undefined;
const dbUsername = process.env.DB_USERNAME || "";

const db = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: "mysql",
});

export { db };
