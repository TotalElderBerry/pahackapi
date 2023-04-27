const db = require('../db/db')
const employeeModel = require('./employee.model')
const userModel = require('./user.model')

const adminModel = {}

adminModel.getMasterPageData = (callback) => {
    const query = `select * from employee inner join teamcomposition on teamcomposition.employee_id = employee.employee_id inner join department on department.department_id = teamcomposition.department_id inner join departmentcomposition on departmentcomposition.department_id = teamcomposition.department_id`

    db.query(query,(err,res) => {
        if(err) throw err
        const all = []
        
        if (!res) {
            callback([]);
            return;
        }
        
        if(res.length == 0){
            callback([])
            return
        }
        for(const data in res){
            const row = {
                "department": res[data]['department_name'],
                "group/team": res[data]['hybrid_schedule'],
            }
            employeeModel.getEmployeebyId(res[data]['employee_id'], (employee) => {
                console.log(employee);
                const {first_name, last_name, PTO, holiday_off, location, work_type, shift_schedule,remarks} = employee
                row.employeeName = first_name + " " + last_name
                row.PTO = (PTO == 0)?'Unplanned Leave':'Planned Leave'
                row.holiday_off = holiday_off
                row.location = (location == 0)?'Outside Cebu':'Within Cebu'
                row.work_type = (work_type == 0)?'WFH':'Onsite'
                row.shift_schedule = shift_schedule
                row.remarks = remarks
                all.push(row)
                callback(all,res)
            })
        }
        
        console.log(all);
    })
}

adminModel.getAdmins = (callback) => {
    const query = `select * from admin inner join user on user.user_id = admin.user_id`

    db.query(query,(err,res) => {
        if(err) throw err
            const all_admin = []
            for(const emp in res){
                const admin = {}
                admin.admin_id = res[emp]['admin_id'],
                admin.email = res[emp]['email'],
                admin.password = res[emp]['password']
                all_admin.push(admin)
            }
            callback(all_admin)
    })
}


adminModel.addAdmin = (fields) => {
    
    userModel.addUser(fields,(insertId) => {

        const query = 'INSERT INTO admin (user_id) values (?)'

        db.query(query,[insertId],(err,res) => {
            console.log("inside callback");
            console.log(err);
            if(err){
                throw err
            }else{
                return res.insertId
            }
        })
    })    
 }


module.exports = adminModel


