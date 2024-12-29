import mongoose, { Schema } from "mongoose";
const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
    },

    website: {
      type: String,
    },

    location: {
      type: String,
    },

    logo: {
      type: String, //URL
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const companyModal = mongoose.model("Company", companySchema);
