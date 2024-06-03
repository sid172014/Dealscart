const express = require('express');
const bcrypt = require('bcrypt');
const router = new express.Router();

const { users } = require('../db/database');
const authMiddleware = require('../middleware/auth');
const { default: axios } = require('axios');

// User Signup Router
router.post('/users/signup', async (req, res) => {
    try {
        const user = new users(req.body);
        await user.generateToken();
        await user.encryptPassowrd();
        await user.save();

        res.cookie('token', user.token, {
            path: '/',
            httpOnly: true,
            sameSite: "lax",
            secure : true
        });
        res.status(201).send(user);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// User Login Router
router.post('/users/login', async (req, res) => {
    try {
        const user = await users.findOne({
            email: req.body.email
        });
        if (!user) {
            throw new Error("User does not exists!");
        }

        // Checking if the given password is correct
        const checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (checkPassword) {
            await user.generateToken();
            res.cookie('token', user.token, {
                path: '/',
                httpOnly: true,
                sameSite: "lax"
            });
            await user.save();
            res.json({
                message: "Successfully logged in !",
                token: user.token
            });
        }else{
            throw new Error("The password is wrong");
        }
        // Regenerating the token for the user and saving it again as a cookie inside the browser

    } catch (e) {
        res.status(404).json({
            error: e.message
        });
    }
});


router.get('/users/details', authMiddleware, async(req,res) => {
    try{
        res.send(req.user);
    }catch(e){
        res.status(500).send(e.message);
    }
})


router.post('/users/addToCart', authMiddleware,async (req,res) => {
    try{
        const addToCart = await users.findByIdAndUpdate(req.user._id,{
            $push : {
                cart : {
                    id : req.body.id,
                    quantity : req.body.quantity,
                    price : req.body.price
                }
            }
        });
        res.json({
            message : "Item added to Cart"
        });
    }catch(e){
        res.status(500).json({
            error : e.message
        });
    }
});

router.get('/users/cartItems',authMiddleware,async(req,res) => {
    try{

        const items = await Promise.all(req.user.cart.map(async (item) => {   
            const response = await axios.get(`https://dummyjson.com/products/${item.id}`)
            if(response.data){
                return {
                    ...response.data,
                    quantity : item.quantity
                }
            };
        }));
        res.send(items);
    }catch(e){
        res.status(500).send(e.message);
    }
});

router.delete('/users/:itemId', authMiddleware,async(req,res) => {
    try{   
        // Creating a temporary list for the new filtered items
        const newList = req.user.cart.filter((item) => {
            return item.id != req.params.itemId
        });

        // Actually updating the database after deleting or removing the item that the user doesn't want in the cart
        await users.findByIdAndUpdate(req.user._id, {
            cart : newList
        });
        res.json({
            message : "Item removed from Cart"
        });
    }catch(e){
        res.status(404).json({
            error : e.message
        });
    }
})

module.exports = router;