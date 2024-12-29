import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyByID,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyByID);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;

// http://localhost:8000/api/v1/company/register
// http://localhost:8000/api/v1/company/get
// http://localhost:8000/api/v1/company/get/:id
// http://localhost:8000/api/v1/company/update/:id
