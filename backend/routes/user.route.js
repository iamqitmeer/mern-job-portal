import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated, logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;

// http://localhost:8000/api/v1/auth/register
// http://localhost:8000/api/v1/auth/login
// http://localhost:8000/api/v1/auth/logout
// http://localhost:8000/api/v1/auth/profile/update
