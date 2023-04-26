const express = require('express')
const app = express()

const userModel = require('../../model/user.model')
const teamleadModel = require('../../model/teamlead.model')
const employeeModel = require('../../model/employee.model')
const adminModel = require('../../model/admin.model')

app.get('/', (req,res) => {
    teamleadModel.getTeamLeaders((teamleads) => {
        const user = {
            admins: [],
            teamleaders: [],
            employees: []
        }
        user.teamleaders.push(teamleads)
        employeeModel.getEmployees((employees) => {
            user.employees.push(employees)
            adminModel.getAdmins((admins) => {
                user.admins.push(admins)
                res.send(user)
            })
        })
        console.log(user);
    })
})

module.exports = app