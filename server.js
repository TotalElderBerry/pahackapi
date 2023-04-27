const express = require('express')
const cors = require('cors')
const app = express()

const employeeGet = require('./http/get/employee.get')
const teamGet = require('./http/get/team.get')
const adminGet = require('./http/get/admin.get')
const usersGet = require('./http/get/users.get')
const departmentGet = require('./http/get/department.get')
const departmentsGet = require('./http/get/departments.get')
const shiftSchedsGet = require('./http/get/shiftsched.get')

const employeePost = require('./http/post/employee.post')
const adminPost = require('./http/post/admin.post')
const teamPost = require('./http/post/team.post')
const teamLeadPost = require('./http/post/teamlead.post')
const teamLeadGet = require('./http/get/teamlead.get')
const departmentPost = require('./http/post/department.post')
const shiftschedPost = require('./http/post/shiftsched.post')
const loginPost = require("./http/post/login.post");
const attendancePost = require('./http/post/attendance.post')
const attendanceGet = require('./http/get/attendance.get')

const hazardPayGet = require('./http/get/hazardpays.get')
const hazardPayPost = require('./http/post/hazardpays.post')
const hazardPayPut = require('./http/put/hazardpays.put')
const hazardPayDelete = require('./http/delete/hazardpays.delete')

const teamsGet = require('./http/get/teams.get')

const teamDelete = require('./http/delete/team.delete')
const shiftSchedDelete = require('./http/delete/shiftsched.delete')
const departmentDelete = require('./http/delete/department.delete')

const teamPut = require('./http/put/team.put')
const departmentPut = require('./http/put/department.put')
const shiftSchedPut = require('./http/put/shiftsched.put')

// Kani i change if mag test ka
const PROD = true;

if (PROD) {
    app.use(cors({
        origin: '*'
    }));
    
    app.use(express.urlencoded({ extended: true }));
} else {
    app.use(express.json())
}

app.use('/api/employee',employeeGet,employeePost)
app.use('/api/team',teamGet,teamPost,teamDelete, teamPut);
app.use('/api/teamlead',teamLeadPost,teamLeadGet)
app.use('/api/departmentTeams',departmentGet)
app.use('/api/admin',adminGet, adminPost)


app.use('/api/shiftsched', shiftschedPost, shiftSchedDelete, shiftSchedPut);
app.use('/api/shiftscheds', shiftSchedsGet)
app.use('/api/department',departmentDelete, departmentPost, departmentPut)
app.use('/api/departments',departmentsGet)
app.use('/api/teams',teamsGet)
app.use('/api/users',usersGet)
app.use('/api/login', loginPost);
app.use('/api/attendance',attendanceGet,attendancePost)
app.use('/api/hazardPay',hazardPayPost,hazardPayPut,hazardPayDelete)
app.use('/api/hazardPays', hazardPayGet)

app.listen(8000,() => {
    console.log("Listening at port 8000");
})