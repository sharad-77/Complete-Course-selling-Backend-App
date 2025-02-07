const express = require("express");
const adminRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require('../db');
const Course = require("../db");
require('dotenv').config();

const Secret = process.env.JWT_ADMIN_SECRET;

adminRoute.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const hasedPassword = await bcrypt.hash(password, 5);
  console.log(hasedPassword);

  await Admin.create({
    email,
    password: hasedPassword,
    firstName,
    lastName,
  });

  console.log("Server mased up");

  res.json({
    message: "Account created"
  });
});

adminRoute.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const adminFind = await Admin.findOne({
    email,
    password,
  });

  if (!adminFind) {
    res.json({
      message: "Pleas Enter Right value",
    });
  }

  const comparePassword = await bcrypt.compare(password, respon.password);

  if (!comparePassword) {
    res.json({
      message: "Enter valid Password",
    });
  }

  const token = await jwt.sign(
    {
      id: adminFind._id,
    },
    Secret,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    adminId: adminFind._id,
  });
});
adminRoute.post("/course", (req, res) => {
  res.json({
    message: "Hello From admin",
  });
});

adminRoute.put("/course", (req, res) => {
  res.json({
    message: "Hello From admin",
  });
});

adminRoute.get("/courses", (req, res) => {
  res.json({
    message: "Hello From admin",
  });
});

module.exports = {
  adminRoute,
};
