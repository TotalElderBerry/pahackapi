const express = require('express')
const app = express()

const teamModel = require('../../model/team.model')

app.delete('/:id', (req,res) => {
    const teamId = req.params.id
    try {
        teamModel.deleteById(teamId, (data)=>{
            res.status(200).send({"success":data > 0})
        })
    } catch (error) {
        console.log(error);
    }
    
})

module.exports = app