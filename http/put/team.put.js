const express = require('express')
const app = express()

const teamModel = require('../../model/team.model')

app.put("/:id",(req,res) => {
    const id = req.params.id;
    const name = req.body.name

    try {
        teamModel.editTeam(id, name, () => {
            res.status(200).send({ "success": true })
        })
    } catch (error) {
        console.log(error);
    }
});


module.exports = app