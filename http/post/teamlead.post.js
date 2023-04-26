const express = require('express')
const app = express()

const db = require('../../model/employee.model')
const teamModel = require('../../model/team.model')


app.post("/", (req,res) => {
    try {
        teamModel.addTeamLead(req.body)
    } catch (error) {
        console.log(error);
    }
})

module.exports = app