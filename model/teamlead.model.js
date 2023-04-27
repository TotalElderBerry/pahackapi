const db = require('../db/db')
const employeeModel = require('./employee.model')
const userteamleadmodel = require('./userteamlead.model')

const teamleadModel = {}

 teamleadModel.getTeamLeaders = (callback) => {
    const query = `select * from teamleader inner join user on user.user_id = teamleader.user_id`

    db.query(query,(err,res) => {
        if(err) throw err
        if(res.length > 0){
            const all_teamlead = []
            for(const emp in res){
                const teamlead = {}
                teamlead.teamlead_id = res[emp]['team_leader_id'],
                teamlead.name = res[emp]['first_name'] + " " + res[emp]['last_name']
                teamlead.email = res[emp]['email'],
                teamlead.password = res[emp]['password']
                all_teamlead.push(teamlead)
            }
            callback(all_teamlead)
        }
    })
}

teamleadModel.getTeamLeadbyId = (team_lead_id, callback) => {
    const query = `select * from teamleader inner join user on user.user_id = teamleader.user_id where teamleader.team_leader_id = ${team_lead_id}`

    db.query(query,(err,res) => {
        if(err) throw err
        const team_lead = {
            "first_name": res[0]['first_name'],
            "last_name": res[0]['last_name'],
            "email": res[0]['email']
        }
        callback(team_lead)
    })
}

teamleadModel.getTeamLeadTeam = (team_leader_id,callback) => {
    const query = `select * from teamcomposition inner join departmentcomposition on departmentcomposition.department_id = teamcomposition.department_id and teamcomposition.team_id = departmentcomposition.team_id where departmentcomposition.team_leader_id = ${team_leader_id}`

    db.query(query,(err,res) => {
        if(err) throw err
        teamleadModel.getTeamLeadbyId(res[0]['team_leader_id'], (teamleader) => {

            

            const teamleaderobj = teamleader
            teamleaderobj.department_id = res[0]['department_id']
            teamleaderobj.employees = []
            for(const emp in res){
                userteamleadmodel.getEmployeebyId(res[emp]['employee_id'], (employee) => {
                    const emps = {}
                    emps.employee_name = employee.first_name +" "+employee.last_name
                    emps.shift_schedule = employee.shift_schedule
                    emps.group = res[emp]['hybrid_schedule']
                    emps.work_type = employee.work_type
                    emps.PTO = employee.PTO
                    emps.holiday_off = employee.holiday_off
                    emps.location = employee.location
                    teamleaderobj.employees.push(emps)
                    callback(teamleaderobj,res)
                })

            }
        })
    })
    
}



module.exports = teamleadModel