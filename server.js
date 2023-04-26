const express = require('express')
const cors = require('cors')
const app = express()

const employeeGet = require('./http/get/employee.get')
const teamGet = require('./http/get/team.get')
const adminGet = require('./http/get/admin.get')
const usersGet = require('./http/get/users.get')
const departmentGet = require('./http/get/department.get')
const departmentsGet = require('./http/get/departments.get')

const employeePost = require('./http/post/employee.post')
const adminPost = require('./http/post/admin.post')
const teamPost = require('./http/post/team.post')
const teamLeadPost = require('./http/post/teamlead.post')
const departmentPost = require('./http/post/department.post')

const teamsGet = require('./http/get/teams.get')

const teamDelete = require('./http/delete/team.delete')
const departmentDelete = require('./http/delete/department.delete')

const teamPut = require('./http/put/team.put')
const departmentPut = require('./http/put/department.put')

// app.use("*", (req, res) => {
//     const pathname = req.originalUrl.split("?")[0];

// app.use(cors({
//     origin: '*'
// }));

// app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use('/api/employee',employeeGet,employeePost)
app.use('/api/team',teamGet,teamPost,teamDelete, teamPut);
app.use('/api/teamlead',teamLeadPost)
app.use('/api/departmentTeams',departmentGet)
app.use('/api/admin',adminGet)

app.use('/api/department',departmentDelete, departmentPost, departmentPut)
app.use('/api/departments',departmentsGet)
app.use('/api/teams',teamsGet)
app.use('/api/users',usersGet)

app.listen(8000,() => {
    console.log("Listening at port 8000");
})