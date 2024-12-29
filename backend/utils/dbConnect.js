import mongoose from "mongoose";

export default async function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected Succesfully"))
    .catch((e) => console.log(`Error While DB Connection ${e}`));
}
