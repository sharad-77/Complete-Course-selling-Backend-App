const express = require('express');
const mongoose = require('mongoose');
const { adminRoute } = require('./Routes/admin.js');
const { coursesRoute } = require('./Routes/courses.js');
const { userRoute } = require('./Routes/user.js');
require('dotenv').config();

const app = express();


async function dbConnect() {
    await mongoose.connect(process.env.MONGODB_URI);
}

dbConnect();

app.use(express.json());

app.use("/api/v1/admin/",adminRoute);
app.use("/api/v1/user/",userRoute);
app.use("/api/v1/coures/",coursesRoute);

app.listen(3000);