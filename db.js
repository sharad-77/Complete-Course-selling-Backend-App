const mongoose = require('mongoose');
const Object_Id = mongoose.Types.ObjectId;
require('dotenv').config();

async function dbConnect() {
    await mongoose.connect(process.env.MONGODB_URI);
}

dbConnect();

const adminSchema = new mongoose.Schema({
    email:String,
    password:String,
    firstName:String,       
    lastName:String
});


const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    creatorId : Object_Id
})


const Admin = mongoose.model('Admin',adminSchema);
const Course = mongoose.model('Course',courseSchema);

module.exports = {
    Admin,
    Course
}