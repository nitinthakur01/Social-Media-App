import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nitinthakur46323:nitinthakur46323@cluster0.daamlvt.mongodb.net/"
    );
    console.log("mongodb connected successfully.");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
