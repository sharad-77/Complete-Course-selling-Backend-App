const express = ('express');
const userRoute = express.Router();


userRoute.post(("/signup"), (req,res) => {
    res.josn({
        message:"Hello for post"
    })
});

userRoute.post(("/signin"), (req,res) => {
    res.josn({
        message:"Hello for post"
    })
});

userRoute.get(("/purceses"), (req,res) => {
    res.josn({
        message:"Hello for post"
    })
});

module.exports({
    userRoute
})