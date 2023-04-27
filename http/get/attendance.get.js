const express = require('express')
const app = express()

const adminModel = require('../../model/admin.model')
const attendanceModel = require('../../model/attendance.model')

app.get('/:id', (req,res) => {
    attendanceModel.getAttendanceOfStudent(req.params.id,() =>{
        
    })
})

module.exports = app