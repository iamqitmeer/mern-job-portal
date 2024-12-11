import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/dbConnect.js";

dotenv.config({})

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173/",
  Credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB()
  console.log(`Server running at port ${PORT}`);
});

app.get("/", (req, res) => {
  return res.json({
    message: "Data Fetched 🎉",
    data: ["Hello", "World", "I am", "Qitmeers"],
  });
});
