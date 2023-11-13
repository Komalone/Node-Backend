// without express framewark-------------------
//const http= require('http');

//const routes= require('./routes');
//const server= http.createServer(routes.handler);
//server.listen(3002);

// with express framework-------------------

const express= require('express');

const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product', (req, res, next)=> {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit"> Add Product</button></form>')
});
app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next)=> {
    res.send('<h1> Hello by express js</h1>')
})

app.listen(3002);

