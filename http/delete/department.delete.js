const express = require('express')
const app = express()

const departmentModel = require('../../model/department.model')

app.delete('/:id', (req,res) => {
    const deptId = req.params.id

    try {
        departmentModel.deleteById(deptId,() => {
            res.status(200).send({"success": true })
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app