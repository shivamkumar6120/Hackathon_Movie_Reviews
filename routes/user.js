//default import
const express = require('express')
const bcrypt = require('bcrypt')

//custome import
const pool = require("../utils/db");
const config = require('../utils/config');

const router = express.Router()

//Router
//users detail fetching
router.get("/", (req, res) => {

    const sql = "SELECT * FROM users"

    // The callback uses (error, data) correctly
    pool.query(sql, (error, data) => {

        if (data) {
            res.send({ status: "Success", data })
        }
        else {
            res.send({ status: "error", error })
        }
    })
});

//user singup

router.post("/signup",async (req, res) => {


    const { first_name, last_name, email, password, mobile, birth } = req.body 
    

    const sql = `INSERT INTO USERS(first_name, last_name, email, password, mobile, birth) VALUES(?, ?, ?, ?, ?, ?)`

    console.log(req.body)
    try{
        const hashedPassword = await bcrypt.hash(password, config.saltRound) 
        
        pool.query(sql,[first_name, last_name, email, hashedPassword, mobile, birth],(error,data)=>{
            if(data){
                res.send({status : "Success", data})
            }
            else{
                res.send({status : "Error", error}) 
            }
        })
    }catch(error){
        res.send({status : "error", error})
    }
})




module.exports = router;


