const express = require('express')
const app = express()

const db = require('../../model/employee.model');
const departmentModel = require('../../model/department.model');

app.post("/",(req,res) => {
    const name = req.body.name

    try {
        departmentModel.addDepartment(name, (id) => {
            res.status(200).send({ "success": id > 0 })
        })
    } catch (error) {
        console.log(error);
    }
});


module.exports = app