const express = require('express')
const app = express()

const hazardPayModel = require('../../model/hazardpays.model')

app.post("/",(req,res) => {
    console.log(req.body);
    const { area, pay } = req.body

    try {
        hazardPayModel.addHazardPay(area, pay, (data) => {
            res.status(200).send({"success": data > 0})
        });
    } catch (error) {
        console.log(error);
    }
})

module.exports = app