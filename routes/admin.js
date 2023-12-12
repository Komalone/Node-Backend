const path= require('path');
const express= require('express');

const rootDir= require('../util/path');

const router= express.Router();

// reach here with admin/add-product with get req
router.get('/add-product', (req, res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// reach here with admin/add-product with post
router.post('/add-product', (req, res, next)=>{     // same pop can be used if method is different like get nd post
    console.log(req.body.title);
    res.redirect('/');
});

module.exports=router;