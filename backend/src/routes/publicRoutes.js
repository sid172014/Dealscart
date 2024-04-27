const express = require('express');
const axios = require('axios');

const router = new express.Router();

// Sending the carousel images by sorting down the first five items from the dummyJSON response
router.get('/slidebar', async (req,res) => {  
    try{
        const response = await axios.get('https://dummyjson.com/products?limit=50');
        const allProds = response.data.products.sort((a,b) => b.rating - a.rating);
        const carouselTrending = [];
        for(let i=0;i<4;i++){
            carouselTrending.push(allProds[i]);
        }
        res.send(carouselTrending);
    }catch(e){
        res.status(400).send(e.message);
    }
});

// Sending heavily discounted products
router.get('/discounted', async(req,res) => {
    try{
        const response = await axios.get('https://dummyjson.com/products?limit=50');
        const allProds = response.data.products.sort((a,b) => b.discountPercentage - a.discountPercentage);
        res.send(allProds);
    }catch(e){
        res.stauts(400).send(e.message);
    }
})

module.exports = router;