const { secretKey } = require('../config/config');
const jwt = require('jsonwebtoken');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const auth = req.headers.authorization;
    if(!auth){
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }
    const token = auth.slice(7);
    try{
        const user = await jwt.verify(token, secretKey);
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }
}

module.exports = userMiddleware;