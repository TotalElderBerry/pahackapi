const db = require('../db/db')
const attendanceModel = require('./attendance.model')
const teamModel = require('./team.model')
const teamleadModel = require('./teamlead.model')
const userModel = require('./user.model')

const getAccumulatedAttendanceBonus = require('../functions/attendance-bonus')

const employeeModel = {}

employeeModel.getEmployeebyId = (employeeId,callback) => {
    // const query = `SELECT * from employee inner join user on user.user_id = ${employeeId}`
    // const query = `select * from user left join employee on employee.user_id = user.user_id and employee.user_id = 13 where employee.user_id = 13`
    const query = `select * from employee left join user on employee.employee_id = ${employeeId} and employee.user_id = user.user_id where employee.employee_id = ${employeeId}`

    db.query(query, (err, res) => {
        if(err) {
            console.log(err);
            throw err
        }
        if(res){
            const employee = {
                "employee_id": res[0]['employee_id'],
                "first_name": res[0]['first_name'],
                "last_name": res[0]['last_name'],
                "middle_name": res[0]['middle_name'],
                "email": res[0]['email'],
                "birthdate": res[0]['birthdate'],
                "gender": res[0]['gender'],
                "address": res[0]['address'],
                "mobile_number": res[0]['mobile_number'],
                "status": res[0]['status'],
                "shift_schedule": res[0]['shift_schedule'],
                "work_type": res[0]['work_type'],
                "PTO": res[0]['PTO'],
                "holiday_off": res[0]['holiday_off'],
                "location": res[0]['locatin'],
                "remarks": res[0]['remarks']
            }
            callback(employee)
        }
    })
}



employeeModel.addEmployee = (fields, callback) => {
    
    userModel.addUser(fields,(insertId) => {
        const {status,shift_schedule,work_type,PTO} = fields;

        const query = 'INSERT INTO employee (user_id,status,shift_schedule,work_type,PTO,holiday_off,locatin) values (?,?,"A",0,0,0,0)'
        console.log(status);

        db.query(query,[insertId,status,],(err,res) => {
            console.log("inside callback");
            console.log(err);
            if(err){
                throw err
            }else{
                teamModel.addEmployee(fields,res.insertId,(message)=>{
                    console.log(message);
                })
                
                callback(res.insertId)
            }
        })
    })    
 }

 employeeModel.getEmployees = (callback) => {
    const query = `select * from employee inner join user on user.user_id = employee.user_id`

    db.query(query,(err,res) => {
        if(err) throw err
        if(res.length > 0){
            const all_employee = []
            for(const emp in res){
                const employee = {}
                employee.employee_id = res[emp]['employee_id'],
                employee.name = res[emp]['first_name'] + " " + res[emp]['last_name']
                employee.email = res[emp]['email'],
                employee.password = res[emp]['password']
                all_employee.push(employee)
            }
            // console.log(all_employee);
            callback(all_employee)
        }
    })
}

employeeModel.getUserEmployee = (employee_id,callback) =>{
    const query = `select * from teamcomposition inner join departmentcomposition on teamcomposition.department_id = departmentcomposition.department_id inner join department on department.department_id = departmentcomposition.department_id where teamcomposition.employee_id = ${employee_id}`

    db.query(query,(err,res) => {
        if(err) throw err
        const data = {}
        data.department_name = res[0]['department_name'] 
        data.team_id = res[0]['team_id']
        employeeModel.getEmployeebyId(employee_id,(employee) => {
            data.name = employee.first_name +" "+employee.last_name
            data.shift_schedule = employee.shift_schedule
            data.work_type = employee.work_type
            data.PTO = employee.PTO
            data.holiday_off = employee.holiday_off
            data.location = data.location
            teamModel.getTeambyId(res[0]['team_id'],(resteam) => {
                data.team_name = resteam[0]['team_name'],
                teamleadModel.getTeamLeadbyId(res[0]['team_leader_id'], (team_lead) => {
                    data.team_leader_name = team_lead.first_name + " " + team_lead.last_name
                    attendanceModel.getAttendanceOfEmployee(employee_id, (res) => {
                        data.proattendancebonus = getAccumulatedAttendanceBonus(res,'3')
                        callback(data)
                    })
                })
            })
        })
    })
}



module.exports = employeeModel