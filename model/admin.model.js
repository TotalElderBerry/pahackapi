const db = require('../db/db')
const employeeModel = require('./employee.model')

const adminModel = {}

adminModel.getMasterPageData = (callback) => {
    const query = `select * from departmentcomposition inner join department on department.department_id = departmentcomposition.department_composition_id inner join teamcomposition on teamcomposition.department_id = departmentcomposition.department_id and teamcomposition.team_id = departmentcomposition.team_id`

    db.query(query,(err,res) => {
        if(err) throw err
        const all = []
        for(const data in res){
            const row = {
                "department": res[data]['department_name'],
                "group/team": res[data]['hybrid_schedule'],
            }
            employeeModel.getEmployeebyId(res[data]['employee_id'], (employee) => {
                const {first_name, last_name, PTO, holiday_off, location, work_type, shift_schedule,remarks} = employee
                row.employeeName = first_name + " " + last_name
                row.PTO = PTO
                row.holiday_off = holiday_off
                row.location = location
                row.work_type = work_type
                row.shift_schedule = shift_schedule
                row.remarks = remarks
                all.push(row)
                callback(all,res)
            })
        }
        console.log(all);
    })
}


module.exports = adminModel