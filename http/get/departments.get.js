const express = require('express')
const app = express()

const departmentModel = require('../../model/department.model')

app.get('/', (req,res) => {
    departmentModel.getDepartments((data)=>{
        res.status(200).send({ depts: data });
    })
})

module.exports = app