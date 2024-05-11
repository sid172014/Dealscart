const express = require('express');
const bcrypt = require('bcrypt');
const router = new express.Router();

const {users} = require('../db/database');

// User Signup Router
router.post('/users/signup', async(req,res) => {
    try{
        const user = new users(req.body);
        await user.generateToken();
        await user.encryptPassowrd();
        await user.save();

        res.cookie('token',user.token,{
            path : '/',
            httpOnly : true,
            sameSite : "lax"
        });
        res.status(201).send(user);
    }catch(e){
        res.status(500).send(e.message);
    }
});

// User Login Router
router.post('/users/login', async (req,res) => {
    try{
        const user = await users.findOne({
            email : req.body.email
        });
        if(!user){
            throw new Error("User does not exists!");
        }
        res.send("Hello world");
    }catch(e){
        res.status(404).send(e.message);
    }
})

module.exports = router;