const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const connectDB = require("./db/connect");
app.use(cors());
app.use(express.json());
const bookingRouter = require('./routes/bookingRoutes');

app.get('/', (req, res) => {
    res.json({message: 'Home Page'})
})

app.use('/api/v1',bookingRouter )


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