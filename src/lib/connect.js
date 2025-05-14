import mongoose from "mongoose";

export const connectMongoDb = async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb")
  } catch (error) {
    console.log('Error connecting mongodb', error)
  }
}