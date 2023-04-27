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

attendanceModel.getAttendanceOfStudent = (student_id) => {
    const query = ` select * from attendance where employee_id = ${student_id}`

    db.query(query,(err,res) => {
        if(err) throw err
        getAccumulatedAttendanceBonus(res,2)
    })
}

const getAccumulatedAttendanceBonus = (records,month) => {
    const monthVal = month + " "
    
    const filteredrecords = records.filter((r) => r.month = monthVal)
    console.log(filteredrecords);
    for(const r in records){

    }
}

module.exports = attendanceModel


