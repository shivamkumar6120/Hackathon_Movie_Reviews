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

    // 1. Destructure using the key name sent from Postman: 'birth'
    const { first_name, last_name, email, password, mobile, birth } = req.body 
    
    // 2. Update the SQL query to use the column name your table expects
    //    (Assuming your database column is named `birth` or `birth_date`)
    //    Based on prior context, let's assume the column is named `birth_date`:
    const sql = `INSERT INTO USERS(first_name, last_name, email, password, mobile, birth) VALUES(?, ?, ?, ?, ?, ?)`

    console.log(req.body)
    try{
        const hashedPassword = await bcrypt.hash(password, config.saltRound) 
        
        // 3. Ensure your parameters array uses the correct variables
        pool.query(sql,[first_name, last_name, email, hashedPassword, mobile, birth],(error,data)=>{
            if(data){
                res.send({status : "Success", data})
            }
            else{
                // This block is hit because the SQL query failed due to the mismatch
                res.send({status : "Error", error}) 
            }
        })
    }catch(error){
        res.send({status : "error", error})
    }
})

//user singup
// router.post("/signup",(req,res)=>{

//       const { first_name, last_name, email, password, mobile, birth_date } = req.body

//     const sql = "INSERT INTO USERS(first_name, last_name, email, password, mobile, birth) VALUES(?,? ,? ,? ,? ,?)"

//     pool.query(sql,[first_name, last_name, email, password, mobile, birth_date],(error,data)=>{
//         if(data){

//             res.send({status : "success", data})
//         }
//         else{
//             res.send({status : "Error", error})
//         }
//     })

// })


module.exports = router;


