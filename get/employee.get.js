const express = require('express')
const app = express()

const employeeModel = require('../model/employee.model')

app.get('/', (req,res) => {
    employeeModel.getEmployee((data)=>{
        res.status(200).send({"employee":data})
    })
})

module.exports = app