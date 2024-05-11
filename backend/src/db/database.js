const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
mongoose.connect(process.env.MONGODB_URL);

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    token : {
        type : String,
        required : true
    }
});

userSchema.methods.generateToken = async function(){
    const user = this;
    user.password = await bcrypt.hash(user.password,10);    
    user.token = jwt.sign({
        _id : user._id.toString()
    }, process.env.JWT_SECRET);
    return user;
}

const users = mongoose.model('users',userSchema);

module.exports = {users};