//default import
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 


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

//user sing up

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




//sign in (log in)
router.post("/signin", (req, res) => { 
    const { email, password } = req.body
    const sql = `SELECT * FROM USERS WHERE email = ?` 

    pool.query(sql, [email], async (error, data) => {
        
        if (error) {
            return res.status(500).send({ status: "error", message: "Database query failed", error: error });
        }

        if (data.length > 0) {
            const dbUser = data[0] 
            const userValid = await bcrypt.compare(password, dbUser.password)
            
            if (userValid) {
                const payload = {
                    uid: dbUser.ID 
                }
                const token = jwt.sign(payload, config.secret)
                
                res.status(200).send({
                    status: "Success",
                    data: {
                        token: token,
                        first_name: dbUser.first_name,
                        email: dbUser.email
                    }
                });

            } else {
                res.status(401).send({ status: "Error", message: "Invalid Password" });
            }
        } else {
            res.status(401).send({ status: "Error", message: "Invalid Email" });
        }
    });
});


module.exports = router;


