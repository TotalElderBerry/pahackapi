const express = require('express')
const app = express()

const teamModel = require('../../model/team.model')

app.delete('/:id', (req,res) => {
    const teamId = req.params.id

    try {
        teamModel.deleteTeamById(teamId,() => {
            res.status(200).send({"success": true })
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app