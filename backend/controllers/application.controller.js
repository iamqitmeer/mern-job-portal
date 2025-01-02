import { applicationModal } from "../modals/application.modal.js";
import { JobModal } from "../modals/job.modal.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job Id is required",
        success: false,
      });
    }

    // check if ther user is already applied for this job

    const existingApplication = await applicationModal.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have Already applied for this Job",
        success: false,
      });
    }

    const job = await JobModal.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    const newApplication = await applicationModal.create({
      job: jobId,
      applicant: userId,
    });

    job.application.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Applications for this job, job applied seccesfully",
      success: true,
    });
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .json({ message: error.message || "Something went wrong" });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await applicationModal
      .find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",

          options: { sort: { createdAt: -1 } },
        },
      });

    if (!application) {
      return res.status(404).json({
        message: "Application Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message || "Something went wrong" });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    const job = await JobModal.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant" },
    });

    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message || "Something went wrong" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({
        message: "Status is required",
        success: false,
      });
    }

    // find the application by applicant id

    const application = await applicationModal.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application not found",
        success: false,
      });
    }

    // update the status

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status Update Succesfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message || "Something went wrong" });
  }
};

// export const applyJob = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(400).json({ message: error.message || "Something went wrong" });
//   }
// };
