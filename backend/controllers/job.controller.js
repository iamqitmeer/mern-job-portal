import { JobModal } from "../modals/job.modal.js";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      companyID,
      experience,
    } = req.body;

    // Curent Login User ID

    const userID = req.id;

    if (
      !title ||
      !description ||
      !salary ||
      !requirements ||
      !location ||
      !jobType ||
      !position ||
      !companyID ||
      !experience
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let job = await JobModal.create({
      title,
      description,
      experience,
      requirements: Array.isArray(requirements)
        ? requirements
        : requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      position,
      company: companyID,
      createdBy: userID,
    });

    return res.status(200).json({
      message: "New Job Created Succesfully",
      success: false,
      job,
    });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    return res.status(400).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
};

export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await JobModal.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Jobs Fetched Succesfully",
      success: true,
      jobs,
    });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    return res.status(400).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
};

export const getSingleJobByID = async (req, res) => {
  try {
    const job = await JobModal.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Job Fetched Succesfully",
      success: true,
      job,
    });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    return res.status(400).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const userId = req.id;

    const job = await JobModal.find({ createdBy: req.id });
    if (!job) {
      return res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Job Fetched Succesfully",
      success: true,
      job,
    });
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    return res.status(400).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
};
