const express = require('express')
const coursesRoute = express.Router();

coursesRoute.post(("/allcourses"),(req,res) => {
 res.json({
    meassage:"hello from user"
 })
});

coursesRoute.post(("/payment"),(req,res) => {
 res.json({
    meassage:"hello from user"
 })
});

module.exports = {
   coursesRoute:coursesRoute
}