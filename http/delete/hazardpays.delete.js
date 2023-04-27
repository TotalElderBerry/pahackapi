const express = require('express')
const app = express()

const hazardPayModel = require('../../model/hazardpays.model')

app.delete('/:id', (req,res) => {
    const payId = req.params.id

    try {
        hazardPayModel.deleteById(payId, () => {
            res.status(200).send({"success": true })
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app