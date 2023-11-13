// without express framewark-------------------
//const http= require('http');

//const routes= require('./routes');
//const server= http.createServer(routes.handler);
//server.listen(3002);

// with express framework-------------------

const express= require('express');

const app= express();

app.use((req, res, next)=> {
    console.log("in middleware");
    next();   // allows to continue to other middleware;
})

app.use((req, res, next)=> {
    console.log("in other middleware");
    res.send('<h1> Hello by express js</h1>')
})

app.listen(3002);

