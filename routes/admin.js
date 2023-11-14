const express= require('express');

const router= express.Router();

// reach here with admin/add-product with get req
router.get('/add-product', (req, res, next)=> {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit"> Add Product</button></form>')
});

// reach here with admin/add-product with post
router.post('/add-product', (req, res, next)=>{     // same pop can be used if method is different like get nd post
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;