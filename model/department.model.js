const db = require('../db/db');
const teamModel = require('../model/team.model')
const departmentModel = {}

departmentModel.addDepartment = (name, callback) => {
    const query = `INSERT INTO department (department_name) VALUES (?)`

    db.query(query, [name], (err, res) => {
        if (err) {
            console.log(err);
            throw err;
        }

        // Get the affected rows
        callback(res.insertId);
    });
};

departmentModel.editDepartment = (id, name, callback) => {
    const query = `UPDATE department SET department_name = ? WHERE department_id = ?`

    db.query(query, [name, id], (err, res) => {
        if (err) {
            console.log(err);
            throw err;
        }

        // Get the affected rows
        callback();
    });
};

departmentModel.deleteById = (id, callback) => {
    const query = `DELETE FROM department WHERE department_id = ?`;

    db.query(query, [id], (err, res) => {
        if (err) {
            console.log(err);
            throw err;
        }

        // Get the affected rows
        callback();
    });
};

departmentModel.getDepartments = (callback) => {
    const query = "SELECT * from department";
    
    db.query(query,(err,res) => {
        if(err) throw err
        callback(res)
    })
};

departmentModel.getDepartmentsWithTeams = (callback) => {
    const query = "SELECT * from department";

    let departments = [
        
    ]
    

    db.query(query,(err,res) => {
        if(err) throw err
        for(const department in res){
            teamModel.getTeamsbyDepartmentId(res[department]['department_id'], (teams) => {
                    // console.log("teams: ",teams);
                    const departmentDetails = {
                        "department_details": {
                            "department_id": res[department]['department_id'],
                            "department_name": res[department]['department_name'],
                        },
                        teams,
                    }
                    console.log(departmentDetails);
                    departments.push(departmentDetails)
                
                    callback(departments)
                })
            }
    })

}


departmentModel.addEmployee = () => {
    // const query = 
}

departmentModel.addTeam = () => {
    const query = ``
}


module.exports = departmentModel
