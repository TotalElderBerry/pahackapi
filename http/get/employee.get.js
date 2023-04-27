const express = require('express')
const app = express()

const employeeModel = require('../../model/employee.model')

app.get('/', (req,res) => {
    const {employee_id} = req.body
    console.log(employee_id);
    employeeModel.getUserEmployee(employee_id,(data)=>{
        res.status(200).send({"employee":data})
    })
})



module.exports = app