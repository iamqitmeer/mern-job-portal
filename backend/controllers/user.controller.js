import { userModal } from "../modals/user.modal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, role } = req.body;

    if (!fullName || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        succcess: false,
      });
    }

    const userEmail = await userModal.findOne({ email });

    if (userEmail) {
      return res.status(400).json({
        message: "User With this Email is Already Exist",
        succcess: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let user = new userModal({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
    });

    await user.save();

    res.status(201).json({
      message: "User Registered Succesfully.",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error in register:", error); // Log the error
    res.status(500).json({
      message: "Something Went Wrong",
      success: false,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        succcess: false,
      });
    }

    // Compare/Check Email is Already Exist

    const userEmail = await userModal.findOne({ email });

    if (!userEmail) {
      return res.status(400).json({
        message: "Incorrect email",
        succcess: false,
      });
    }

    // Compare/Check Password

    const isMatchPass = await bcrypt.compare(password, userEmail.password);

    if (!isMatchPass) {
      return res.status(400).json({
        message: "Incorrect password",
        succcess: false,
      });
    }

    // Check User Role

    if (role !== userEmail.role) {
      return res.status(400).json({
        message: "Account does'nt exist with current role.",
        succcess: false,
      });
    }

    // Generate Token

    const tokenData = {
      userId: userEmail._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "User Login Succesfully.",
        success: true,
      });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      succcess: false,
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(201).cookie("token", "", { maxAge: 0 }).json({
      message: "User Logout succesfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      succcess: false,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullName, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    if (!fullName || !bio || !skills || !phoneNumber) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }

    let skillsArr = Array.isArray(skills) ? skills : skills.split(",");
    let userID = req.id;

    let user = await userModal.findById(userID);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    user.fullName = fullName;
    user.phoneNumber = phoneNumber;
    user.profile.bio = bio;
    user.profile.skills = skillsArr;

    await user.save();

    return res.status(200).json({
      message: "User Profile Updated Successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something Went Wrong",
      success: false,
    });
  }
};
