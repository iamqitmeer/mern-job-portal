import { userModal } from "../modals/user.modal.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, role } = req.body;

    if (!fullname || !email || !password || !phoneNumber || !role) {
      res.status(400).json({
        message: "Something is Missing",
        succcess: false,
      });
    }

    const userEmail = await userModal.findOne({ email });

    if (userEmail) {
      res.status(400).json({
        message: "User With this Email is Already Exist",
        succcess: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 100);

    await userModal.create({
      fullname,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      succcess: false,
    });
  }
};
export const login = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    res.status(400).json({
      message: "Something is Missing",
      succcess: false,
    });
  }
};
