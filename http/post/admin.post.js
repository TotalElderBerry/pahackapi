const express = require('express')
const app = express()

const adminModel = require('../../model/admin.model')

app.post("/",(req,res) => {
    console.log(req.body);
    try {
        adminModel.addAdmin(req.body)
        res.status(200).send({"message": "successfully added data"})
    } catch (error) {
        console.log(error);
    }
})

module.exports = app