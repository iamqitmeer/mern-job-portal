import mongoose from "mongoose";

export default async function connectDB() {   
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected Succesfully")
    } catch (error) {
        console.log("Error While DB Connection ", error)
    }
}
