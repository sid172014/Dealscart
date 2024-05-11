const express = require('express');
const bcrypt = require('bcrypt');
const router = new express.Router();

const {users} = require('../db/database');

router.post('/users/signup', async(req,res) => {
    try{
        const user = new users(req.body);
        const updatedUser = await user.generateToken();
        await updatedUser.save();

        res.cookie('token',updatedUser.token,{
            path : '/',
            httpOnly : true,
            sameSite : "lax"
        });
        res.status(201).send(updatedUser);
    }catch(e){
        res.status(500).send(e.message);
    }
});

module.exports = router;