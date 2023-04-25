const db = require('../db/db')

const employeeModel = {}

employeeModel.getEmployee = (callback) => {
    const query = "SELECT * from EMPLOYEE inner join USER on USER.user_id = EMPLOYEE.user_id"

    db.query(query, (err, res) => {
        if(err) {
            console.log(err);
            throw err
        }
        if(res){
            callback(res)
        }
    })
}

employeeModel.addEmployee = () => {
    // const query = 
}



module.exports = employeeModel