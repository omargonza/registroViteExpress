import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};

// Llamada a la función connectDB
connectDB();

mongoose.connection.on("connected", () => {
  console.log("Mongoose conectado");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose desconectado");
});
