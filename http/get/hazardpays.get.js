const express = require('express')
const app = express()

const hazardPayModel = require('../../model/hazardpays.model')

app.get('/', (req,res) => {
    hazardPayModel.gethazardPays((data)=>{
        res.status(200).send({"pays":data})
    })
})

module.exports = app