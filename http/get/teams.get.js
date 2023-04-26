const express = require('express')
const app = express()

const teamModel = require('../../model/team.model')

app.get('/', (req,res) => {
    teamModel.getTeams((data)=>{
        res.status(200).send({"team":data})
    })
})

module.exports = app