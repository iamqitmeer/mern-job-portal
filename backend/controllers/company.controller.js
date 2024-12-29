import { companyModal } from "../modals/company.modal.js";

export const registerCompany = async (req, res) => {
  try {
    let { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let company = await companyModal.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message:
          "You can't registered already declared company name on this site",
        success: false,
      });
    }

    let createCompany = new companyModal({
      name: companyName,
      userId: req.id,
    });

    await createCompany.save();

    return res.status(201).json({
      message: "Company registered succesfully",
      success: false,
      company: createCompany,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    let userID = req.id;
    console.log("userID ---> ", userID);
    let companies = await companyModal.find({ userID });

    if (!companies) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      message: "Companies fetched succesfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const getCompanyByID = async (req, res) => {
  try {
    const companyID = req.params.id;
    const company = await companyModal.findById(companyID);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      message: "Company fetched succesfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    const file = req.file;

    const updateData = {
      name,
      description,
      website,
      location,
    };

    const company = await companyModal.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      message: "Company Data Updat succesfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
