const express = require('express')
const app = express()

const shiftSched = require('../../model/shiftsched.model')

app.get('/', (req,res) => {
    shiftSched.getShiftSchedules((data)=>{
        res.status(200).send({"shifts":data})
    })
})

module.exports = app