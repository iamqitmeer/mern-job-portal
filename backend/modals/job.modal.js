import mongoose, { mongo, Schema } from "mongoose";
const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },

    requirements: [
      {
        type: String,
      },
    ],

    salary: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Company",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    application: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
  },
  { timestamps: true }
);

export const JobModal = mongoose.model("job", jobSchema);
