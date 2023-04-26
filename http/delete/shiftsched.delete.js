const express = require('express')
const app = express()

const shiftShedModel = require('../../model/shiftsched.model')

app.delete('/:id', (req,res) => {
    const shiftId = req.params.id

    try {
        shiftShedModel.deleteById(shiftId, () => {
            res.status(200).send({"success": true })
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app