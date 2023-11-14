// without express framewark-------------------
//const http= require('http');

//const routes= require('./routes');
//const server= http.createServer(routes.handler);
//server.listen(3002);

// with express framework-------------------

const express= require('express');

const bodyParser= require('body-parser');
const adminRoute= require('./routes/admin');
const shopRoute= require('./routes/shop')

const app= express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute);  // this admin is give common strt to adminRoute location
app.use(shopRoute);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3002);

