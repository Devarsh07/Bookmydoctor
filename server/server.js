const express = require("express");
const cors = require("cors");
const path = require("path");
const { Server } = require("socket.io");
const app = express(); // path should be correct


// const paymentRouter = require("./routes/paymentRoutes");
// app.use("/api/payment", paymentRouter);



/*
const dotenv = require('dotenv');

dotenv.config({path: './.env'})
*/
require("dotenv").config();
require("./db/conn");
require("./controllers/socket");

const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter");
const port = process.env.PORT || 5015;

app.use(cors()); //gpt
app.use(express.json()); //gpt


// localhost:5015/api/doctor/getAllDoctor

app.use("/api/user", userRouter);

app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

