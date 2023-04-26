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

 userModel.getUserbyId = (user_id, callback) => {
    const query = `select * from user where user.user_id = ${user_id}`

    db.query(query,(err,res) => {
        if(err) throw err
        const user_details = {
            "user_id": res[0]['user_id'],
            "first_name": res[0]['first_name'],
            "last_name": res[0]['last_name'],
            "middle_name": res[0]['middle_name'],
            "email": res[0]['email'],
            "birthdate": res[0]['birthdate'],
            "gender": res[0]['gender'],
            "address": res[0]['address'],
            "mobile_number": res[0]['mobile_number'],
        }
        callback(user_details)
    })
 }



module.exports = userModel