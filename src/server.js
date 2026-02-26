import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import pool from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5001;
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
