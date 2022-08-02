const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require("mysql");

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "pbx",
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(

        "SELECT * FROM users WHERE username=? AND password=?",
        [username,password],
        (err, result)=>{
            if(err){

                res.send({err:err});
            }else{
                if(result){
                    res.send(result);
                } else{
                    res.send({message: "err"});
                }
            }
        }
    
    );
});

app.listen(1337, () => {
    console.log('server started on 1337');
})