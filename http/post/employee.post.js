const express = require('express')
const app = express()

const db = require('../../model/employee.model')
const employeeModel = require('../../model/employee.model')

app.post("/",(req,res) => {
    try {
        employeeModel.addEmployee(req.body, (id) => {
            res.status(200).send({"message": "successfully added data"})
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app