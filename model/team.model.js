const db = require('../db/db')
const employeeModel = require('./employee.model')

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
        for(const team_idx in res){
            teamModel.getTeamLeaderofTeam(res[team_idx]['team_id'], (teamleader) => {
                let teamInfo = {
                    "team_id": res[team_idx]['team_id'],
                    "team_name": res[team_idx]['team_name'],
                    "teamleader": {},
                    "employees": []
                }
                teamInfo.teamleader = teamleader
                teamModel.getEmployeesFromTeamId(res[team_idx]['team_id'], (employee) => {
                        const allEmployees = []
                        allEmployees.push(employee)
                        console.log(allEmployees);
                        teamInfo.employees = allEmployees
                        teams.push(teamInfo)
                        callback(teams)
                })
                
            })
            // console.log(teamInfo);
        }
    })
}

teamModel.getTeamLeaderofTeam = (team_id, callback) => {
    const query = `SELECT * from user inner join teamcomposition on teamcomposition.team_id =  1  inner join teamleader on teamcomposition.team_leader_id = teamleader.user_id`

    db.query(query,(err,res) => {
        if(err) throw err
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
    const query = `select employee_id from teamcomposition where teamcomposition.team_composition_id = ${teamId}`

    db.query(query,(err,res)=>{
        const employees = []
        if(err) throw err
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


teamModel.addEmployee = (fields) => {
   const {last_name,first_name,middle_name,email,birth_date,gender,address,mobile_number,password,status,shift_schedule,work_type,PTO,holiday_off,locatin} = fields;

    
}



module.exports = teamModel