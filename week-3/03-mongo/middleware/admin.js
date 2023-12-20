// Middleware for handling auth
const { Admin } = require('../db/index');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.findOne({ username: username });
    if(!admin){
        return res.status(404).json({ error : "User not found"});
    }

    if(admin.username !== username && admin.password !== password){
        return res.status(401).json({ error : "Invalid username or password"});
    }
    next();
}

module.exports = adminMiddleware;