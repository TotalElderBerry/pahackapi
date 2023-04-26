const express = require('express')
const cors = require('cors')
const app = express()

const employeeGet = require('./http/get/employee.get')
const teamGet = require('./http/get/team.get')
const adminGet = require('./http/get/admin.get')
const departmentGet = require('./http/get/department.get')

const employeePost = require('./http/post/employee.post')
const teamPost = require('./http/post/team.post')
const teamLeadPost = require('./http/post/teamlead.post')

const teamsGet = require('./http/get/teams.get')

const teamDelete = require('./http/delete/team.delete')

const teamPut = require('./http/put/team.put')

// app.use("*", (req, res) => {
//     const pathname = req.originalUrl.split("?")[0];

    
//     console.log(req.method, pathname);
    
//     res.send("");
// });
app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({ extended: true }));

app.use('/api/employee',employeeGet,employeePost)
app.use('/api/team',teamGet,teamPost,teamDelete, teamPut);
app.use('/api/teamlead',teamLeadPost)
app.use('/api/departments',departmentGet)
app.use('/api/admin',adminGet)

app.use('/api/teams',teamsGet)

app.listen(8000,() => {
    console.log("Listening at port 8000");
})