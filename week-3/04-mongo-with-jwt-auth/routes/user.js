const { Router } = require("express");
const { User , Course } = require("../db/index");
const { secretKey } = require("../config/config");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const router = Router();

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    if(user){
        return res.status(401).json({
            message: 'User Already Exist'
        });
    }
    await User.create({
        username : req.body.username,
        password : req.body.password,
        purchasedCourses: new Array()
    });
    res.json({
        message : "User created successfully"
    });

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    if(!user){
        res.status(401).json({
            message: 'User Does Not Exist'
        });
    }

    const token = jwt.sign({ username : req.body.username }, secretKey);
    res.json({
        token: token
    });
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({
        courses : courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const course = await Course.findById(req.params.courseId);
    const user = await User.findOne({ username: req.user.username });
    // Check if the user already purchased the course
    if (user.purchasedCourses.some(purchasedCourse => purchasedCourse._id.equals(course._id))) {
        return res.status(400).json({ message: 'Course already purchased by the user' });
    }
  
    // Add the course to the user's purchasedCourses array
    user.purchasedCourses.push(course);

    // Save the updated user object to the database
    await user.save();

    res.json({
        message : "Course purchased successfully"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ username : req.user.username });
    res.json({
        purchasedCourses : user.purchasedCourses
    });
});

module.exports = router;
