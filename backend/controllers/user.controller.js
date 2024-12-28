import { userModal } from "../modals/user.modal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  // Compare/Check Email is Already Exist

  const userEmail = await userModal.findOne({ email });

  if (!userEmail) {
    res.status(400).json({
      message: "Incorrect email",
      succcess: false,
    });
  }

  // Compare/Check Password

  const isMatchPass = bcrypt.compare(password, userEmail.password);

  if (!isMatchPass) {
    res.status(400).json({
      message: "Incorrect password",
      succcess: false,
    });
  }

  // Check User Role

  if (role !== userEmail.role) {
    res.status(400).json({
      message: "Account does'nt exist with current role.",
      succcess: false,
    });
  }

  // Generate Token

  const tokenData = {
    userId: userEmail._id,
  };
  const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  return res.status(200).cookie()
};
