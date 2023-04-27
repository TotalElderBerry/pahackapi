const db = require('../db/db')

const attendanceModel = {}

attendanceModel.addAttendance = (employee_id, callback) => {

    const query = `insert into attendance (employee_id, date, month) values (?,?,?)`
    const day = new Date().getDate()
    const month = new Date().getMonth()
    
    db.query(query,[employee_id, day,month],(err,res) => {
        if(err) throw res
        callback("success")
    })
}

attendanceModel.getAttendanceOfEmployee = (employee, callback) => {
    const query = ` select * from attendance where employee_id = ${employee}`

    db.query(query,(err,res) => {
        if(err) throw err
        callback(res)
    })
}


module.exports = attendanceModel


