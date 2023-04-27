const express = require('express')
const app = express()

const teamLeadModel = require('../../model/teamlead.model')

app.get('/:id', (req,res) => {
    // const {team_lead_id} = req.params.id
    const team_lead_id = req.params.id
    teamLeadModel.getTeamLeadTeam(team_lead_id,(results, orig)=>{
        console.log(results);
        if(orig.length == results.employees.length){
            res.status(200).send(results)
        }
    })
})

module.exports = app