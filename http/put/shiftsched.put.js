const express = require('express')
const app = express()

const shiftSchedModel = require('../../model/shiftsched.model')

app.put("/:id",(req,res) => {
    const id = req.params.id;
    const { fromTime, toTime } = req.body;

    try {
        shiftSchedModel.updateShiftSchedule(id, fromTime, toTime, () => {
            res.status(200).send({"success": true })
        });
    } catch (error) {
        console.log(error);
    }
})

module.exports = app