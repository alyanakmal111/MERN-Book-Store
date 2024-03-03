import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/booksrouter.js";
import cors from "cors";
const app = express();

//* Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

//* Mongoose Connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to Database");
    app.listen(PORT, () => console.log(`App is listening to port:${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
