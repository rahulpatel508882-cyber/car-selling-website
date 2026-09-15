const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes/userRoute");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5100;
const MONGO_URL = process.env.MONGO_URL;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use("/", router);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Failed to Connected Database", err);
  });
app.listen(PORT, () => {
  console.log('Server is Running on ${PORT}');
});
