const express = require('express');
const adminRoute = express.Router;

adminRoute.post(("/signup"),(req,res) => {
    res.json({
        message:"Hello From admin"
    });
});

adminRoute.post(("/signin"),(req,res) => {
    res.json({
        message:"Hello From admin"
    });
});


adminRoute.post(("/course"),(req,res) => {
    res.json({
        message:"Hello From admin"
    });
});

adminRoute.put(("/course"),(req,res) => {
    res.json({
        message:"Hello From admin"
    });
});

adminRoute.get(("/courses"),(req,res) => {
    res.json({
        message:"Hello From admin"
    });
});

module.exports = {
    adminRoute
}