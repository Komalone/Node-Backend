const path= require('path')

const express= require('express');
const rootDir= require('../util/path')

const router= express.Router();

router.get('/', (req, res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))
});
router.post('/', (req,res)=>{
    const name= req.body.name;
    const email= req.body.email;
    const obj={name, email};
    console.log(obj);
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})

module.exports= router;