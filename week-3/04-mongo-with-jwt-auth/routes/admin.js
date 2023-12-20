const { Router } = require("express");
const { Admin , Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const { secretKey } = require("../config/config");
const jwt = require("jsonwebtoken");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const admin = await Admin.findOne({ username: req.body.username, password: req.body.password });
    if(admin){
        return res.status(401).json({
            message: 'Admin Already Exist'
        });
    }
    await Admin.create({
        username : req.body.username,
        password : req.body.password
    });
    res.json({
        message: 'Admin created successfully'
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const admin = await Admin.findOne({ username: req.body.username, password: req.body.password });
    if(!admin){
        res.status(401).json({
            message: 'Admin Does Not Exist'
        });
    }

    const token = jwt.sign({ username : req.body.username }, secretKey);
    res.json({
        token: token
    });

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course = new Course({
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        image : req.body.image
    })

    const savedCourse = await course.save();
    res.json({
        message: 'Course created successfully',
        courseId : savedCourse._id
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.json({
        courses : courses
    });
});

module.exports = router;