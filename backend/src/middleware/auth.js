const jwt = require('jsonwebtoken');
const { users } = require('../db/database');

const authMiddleware = async (req,res,next) => {
    try{
        const token = req.cookies.token;
        console.log("Token ", token);
        if(token == undefined){
            throw new Error("Not Authenticated to use the Cart, Please Sign In!");
        }
        const matchId = jwt.verify(token,process.env.JWT_SECRET);
        const user = await users.findById(matchId._id);
        req.user = user;
        next();
    }catch(e){
        return res.status(400).json({
            error : e.message
        })
    }
};

module.exports = authMiddleware;