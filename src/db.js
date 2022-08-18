import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("👌 Connected to DB");
const handleError = (error) => console.log("❌ DB ERROR", error);
db.on("error", handleError);
db.once("open", handleOpen);
