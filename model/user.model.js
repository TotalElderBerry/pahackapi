const db = require('../db/db')

const userModel = {}



userModel.addUser = (fields, callback) => {
    const {last_name,first_name,middle_name,email,birth_date,gender,address,mobile_number,password,status,shift_schedule,work_type,PTO,holiday_off,locatin} = fields;
 
    const query = "insert into user (last_name,first_name,middle_name,email,birth_date,gender,address,mobile_number,password) values (?,?,?,?,?,?,?,?,?)"
    
    db.query(query, [last_name,first_name,middle_name,email,birth_date,gender,address,mobile_number,password,status,shift_schedule,work_type,PTO,holiday_off,locatin], (err,res)=>{
        if(err) throw err
        else{
            callback(res.insertId)
            return
        }
    })
 }



module.exports = userModel