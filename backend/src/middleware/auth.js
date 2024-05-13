const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const token = req.cookies.token;
    const matchId = jwt.verify(token,process.env.JWT_SECRET);
    console.log(matchId);
    next();
};

module.exports = authMiddleware;