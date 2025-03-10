import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://amitrawat09:9988533982@cluster0.libio.mongodb.net/food-del`)
        .then(() => {
            console.log("DB Connected");
        })
        .catch(() => {
            console.log("Somthing went wrong to connect DB");
        })
}