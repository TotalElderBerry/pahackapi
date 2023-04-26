const db = require('../db/db')
const employeeModel = require('./employee.model')
const userModel = require('./user.model')

const teamModel = {}

teamModel.getTeams = (callback) => {
    const query = "SELECT * from teamcomposition"
   
}

teamModel.getTeambyId = (id,callback) => {
    const query = `SELECT * from departmentcomposition where departmentcomposition.team_id = ${id}`

}

teamModel.getTeamsbyDepartmentId = (department_id, callback) => {
    const query = `select * from departmentcomposition inner join team on team.team_id = departmentcomposition.team_id where departmentcomposition.department_id = ${department_id}`
    const teams = []
    db.query(query, (err,res) => {
        if(err) {
            console.log(err);
            throw err
        }
        // if(res.length == 0){
            // }
            for(const team_idx in res){
            teamModel.getTeamLeaderofTeam(res[team_idx]['team_id'],department_id, (teamleader) => {
                let teamInfo = {
                    "team_id": res[team_idx]['team_id'],
                    "team_name": res[team_idx]['team_name'],
                    "teamleader": {},
                    "employees": [],
                    "hybrid_schedule": res[team_idx]['hybrid_schedule']
                }
                teamInfo.teamleader = teamleader
                teamModel.getEmployeesFromTeamId(res[team_idx]['team_id'], (employee) => {
                        const allEmployees = []
                        allEmployees.push(employee)
                        teamInfo.employees = allEmployees
                        teams.push(teamInfo)
                        callback(teams)
                })  
            })
        }
        if(res.length == 0){
                const teamInfo = {
                    
                }
                // teams.push()
                callback(teams)
                return
        }
    })
}

teamModel.getTeamLeaderofTeam = (team_id, department_id, callback) => {
    // const query = `SELECT * from user inner join team on team.team_id = 1 inner join teamleader on team.team_leader_id = teamleader.user_id`
    const query = `select * from user left join teamleader on teamleader.user_id = user.user_id inner join departmentcomposition on departmentcomposition.team_leader_id = teamleader.team_leader_id and departmentcomposition.team_id = ${team_id} where departmentcomposition.department_id = ${department_id}`


    db.query(query,(err,res) => {
        if(err) throw err
        if(res.length == 0){
            const teamleader = {}
            callback(teamleader)
            return
        }
        const teamleader = {
            "team_leader_id": res[0]['team_leader_id'],
            "first_name": res[0]['first_name'],
            "last_name": res[0]['last_name'],
            "middle_name": res[0]['middle_name'],
            "email": res[0]['email'],
            "birthdate": res[0]['birthdate'],
            "gender": res[0]['gender'],
            "address": res[0]['address'],
            "mobile_number": res[0]['mobile_number'],
        }
        callback(teamleader)
    })
}

teamModel.getEmployeesFromTeamId = (teamId, callback) => {
    const query = `select employee_id from teamcomposition where teamcomposition.team_id = ${teamId}`

    db.query(query,(err,res)=>{
        const employees = []
        if(err) throw err
        if(res.length == 0){
            callback(employees)
            return
        }
        for(const empId in res){
            employeeModel.getEmployeebyId(res[empId]['employee_id'],(employee) => {
                employees.push(employee)
                callback(employee)
            })
        }
        // console.log(employees);
    })
}

teamModel.getSingleTeamEmployees = () => {

}


teamModel.addEmployee = (fields, team_id, callback) => {
   const {employee_id,department_id} = fields;

   const query = `INSERT INTO teamcomposition (employee_id,team_id,department_id) values (?,?,?)`

   db.query(query,[employee_id,team_id, department_id], (err,res)=>{
        if(err) {
            callback("Failed")
            return
        }
        callback("Success")
        
   })

}

teamModel.addTeamLead = (fields) => {
    
    userModel.addUser(fields,(insertId) => {
        const {department_id,team_id} = fields
        const query = `insert into teamleader (user_id) values (?)`
        db.query(query,[insertId],(err,res) => {
            if(err) throw err
            try {
                teamModel.addTeamLeadIntoTeam(team_id,department_id,res.insertId)
            } catch (error) {
                console.log(error);
            }
        })
        // teamModel.addTeamLeadIntoTeam(teamId,department_id,insertId)
    })
}

teamModel.addTeamLeadIntoTeam = (teamId,department_id,team_leader_id) => {
    const query = `INSERT into departmentcomposition (department_id,team_id,team_leader_id,hybrid_schedule) values (?,?,?,'A')`

    db.query(query,[department_id,teamId,team_leader_id],(err,res)=>{
        if(err) throw err
        console.log("Adding of team lead in team success");
    })
}



module.exports = teamModel