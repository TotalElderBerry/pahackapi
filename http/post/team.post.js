const express = require('express')
const app = express()

const db = require('../../model/employee.model')
const teamModel = require('../../model/team.model')

app.post("/:id",(req,res) => {
    const teamId = req.params.id
    try {
        teamModel.addEmployee(req.body,teamId,(message)=>{
            res.status(200).send({"message": message})
        })
    } catch (error) {
        console.log(error);
    }
})

app.post("/",(req,res) => {
    const name = req.body.name

    try {
        teamModel.addTeam(name, (id) => {
            res.status(200).send({ "success": id > 0 })
        })
    } catch (error) {
        console.log(error);
    }
});


module.exports = app