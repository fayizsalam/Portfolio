import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), "public"))); 
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));


app.use("/", contactRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});