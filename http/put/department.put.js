const express = require('express')
const app = express()

const departmentModel = require('../../model/department.model')

app.put("/:id",(req,res) => {
    const id = req.params.id;
    const name = req.body.name

    try {
        departmentModel.editDepartment(id, name, () => {
            res.status(200).send({ "success": true })
        })
    } catch (error) {
        console.log(error);
    }
});


module.exports = app