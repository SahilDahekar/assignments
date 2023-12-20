const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    purchasedCourses : {
        type: Array
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}