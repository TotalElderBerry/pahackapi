const express = require('express')
const app = express()

const attendanceModel = require('../../model/attendance.model')

app.post("/:id",(req,res) => {
    try {
        attendanceModel.addAttendance(req.params.id,(message) => {
            res.status(200).send(message)   
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app