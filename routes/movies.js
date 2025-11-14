//defult import
const express = require('express')

//custom import
const pool = require('../utils/db')

const router = express.Router()

router.get("/", (req, res) => {

    const sql = "SELECT * FROM  MOVIES"
    pool.query(sql, (error,data)=>{

        if(data)
        {
            res.send({status : "Success", data})
        }
        else
        {
            res.send({status : "Error", error})
        }
    })
})


module.exports = router