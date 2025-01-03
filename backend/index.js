import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import jobRoutes from "./routes/job.route.js";
import companyRoutes from "./routes/company.route.js";
import applicationRoutes from "./routes/application.route.js";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./utils/dbConnect.js";
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173/",
    Credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
