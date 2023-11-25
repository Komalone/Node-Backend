const mysql= require('mysql2');

const pool= mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node",
    password: "Kom@l111"
});

module.exports= pool.promise();