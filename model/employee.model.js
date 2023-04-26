const db = require('../db/db')
const teamModel = require('./team.model')
const userModel = require('./user.model')

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



employeeModel.addEmployee = (fields) => {
    
    userModel.addUser(fields,(insertId) => {
        const {status,shift_schedule,work_type,PTO,holiday_off,location} = fields;

        const query = 'INSERT INTO employee (user_id,status,shift_schedule,work_type,PTO,holiday_off,locatin) values (?,?,?,?,?,?,?)'
        console.log(status);

        db.query(query,[insertId,status,shift_schedule,work_type,PTO,holiday_off,location],(err,res) => {
            console.log("inside callback");
            console.log(err);
            if(err){
                throw err
            }else{
                teamModel.addEmployee(fields,res.insertId,(message)=>{
                    console.log(message);
                })
                return res.insertId
            }
        })
    })    
 }

 employeeModel.getEmployees = () => {

 }



module.exports = employeeModel