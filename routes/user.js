//default import
const express = require('express')

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

// router.post("/signup", (req, res) => {

//     const { first_name, last_name, email, password, mobile, birth } = req.body
//     const sql = `INSERT INTO USERS(first_name, last_name, email, password, mobile, birth) VALUES(?, ?, ?, ?, ?, ?)`

//     try{
//         const hashPassword =  bcrypt.hash(password, config.saltRound)

//         pool.query(sql,[first_name, last_name, email, hashPassword, mobile, birth],(error,data)=>{
//             res.send({status : "Success", data})
//         })
//     }catch(error){
//         res.send({status : "error", error})
//     }


// })


router.post("/signup",(req,res)=>{

      const { first_name, last_name, email, password, mobile, birth_date } = req.body

    const sql = "INSERT INTO USERS(first_name, last_name, email, password, mobile, birth) VALUES(?,? ,? ,? ,? ,?)"

    pool.query(sql,[first_name, last_name, email, password, mobile, birth_date],(error,data)=>{
        if(data){

            res.send({status : "success", data})
        }
        else{
            res.send({status : "Error", error})
        }
    })

})


module.exports = router;


