import mysql from "mysql2/promise";
import { config } from "dotenv";
config();
export const pool = mysql.createPool({
    host: process.env.HOSTNAME,
    user: "root",
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DBNAME
})