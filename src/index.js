// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});
connectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });
  app.get("/shuvkant", (req, res) => {
    res.send("You are the hacker of the future generation");
  });
  app.get("/", (req, res) => {
    res.send("Shuvkant Chaudhary Phanait");
  });
}).catch((err) => {
  console.log("MONGO_DB CONNECTION FAILED !!! ", err);
});
