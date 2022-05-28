import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "../server/routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

//usage of mongoDB - hosting database on cloud

//replaced @ with %40 since @ cannot be encoded automatically
const CONNECTION_URL =
  "mongodb+srv://hiepnnguyen:NH1610%40123@cluster0.uwc2vdf.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
//connect to database, accept 2 param
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
