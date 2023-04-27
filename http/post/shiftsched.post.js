const express = require('express')
const app = express()

const shiftSchedModel = require('../../model/shiftsched.model')

app.post("/",(req,res) => {
    console.log(req.body);
    const { fromTime, toTime } = req.body

    try {
        shiftSchedModel.addShiftSchedule(fromTime, toTime, (data) => {
            res.status(200).send({"success": data > 0})
        });
    } catch (error) {
        console.log(error);
    }
})

module.exports = app