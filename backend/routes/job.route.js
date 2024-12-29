import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  createJob,
  getAdminJobs,
  getAllJob,
} from "../controllers/job.controller.js";
const router = express.Router();

router.route("/post").post(isAuthenticated, createJob);
router.route("/get-admin-jobs").get(isAuthenticated, getAdminJobs);
router.route("/").get(isAuthenticated, getAllJob);

export default router;

// s
// http://localhost:8000/api/v1/company/get
// http://localhost:8000/api/v1/company/get/:id
// http://localhost:8000/api/v1/company/update/:id
