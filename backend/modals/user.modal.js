import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    role: { type: String, enum: ["student", "recruiter"], required: true },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String }, // Resume URL
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const userModal = mongoose.model("User", userSchema);
