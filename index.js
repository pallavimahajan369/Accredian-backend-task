const express =require("express");
const mysql =require("mysql");
const app= express()
const cors = require("cors");
app.use(cors());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123Pass@",
    database:"test1"
})
//middelware;
app.use(express.json());
//tryal
// app.get("/signup",(req,res)=>{
//     res.json("helllo")
// })

//get method

app.get("/login",(req,res)=>{
    console.log("indatabase");
    const q="SELECT * FROM signup"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    }) 
})
//-----tryal----------------

// app.get("/Anime",(req,res)=>{
//     console.log("indatabase");
//     const q="SELECT * FROM imga"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })
//-----------------------
//post method

app.post("/signup",(req,res)=>{
    const q="INSERT INTO signup(`username`,`email`,`password`) VALUES (?)";
    const values =[
      req.body.username,
      req.body.email,
      req.body.password,  
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json('excellent!!')
        
    })
    
})
app.listen(8080,()=>{
    console.log("connection is succes" )
})