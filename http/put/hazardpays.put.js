const express = require('express')
const app = express()

const hazardPayModel = require('../../model/hazardpays.model')

app.put("/:id",(req,res) => {
    const id = req.params.id;
    const { area, pay } = req.body;

    try {
        hazardPayModel.updateHazardPay(id, area, pay, () => {
            res.status(200).send({"success": true })
        });
    } catch (error) {
        console.log(error);
    }
})

module.exports = app