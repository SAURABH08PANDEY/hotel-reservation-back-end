const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const connectDB = require("./db/connect");
app.use(cors());
app.use(express.json());
const bookingRouter = require("./routes/bookingRoutes");

app.get("/", (req, res) => {
  res.send("Home Page");
});



app.use("/api/v1", bookingRouter);
app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port);
    console.log(`Server started on port ${port}`);
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
