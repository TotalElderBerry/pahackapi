const express = require('express')
const app = express()

const employeeGet = require('./http/get/employee.get')
const teamGet = require('./http/get/team.get')
const departmentGet = require('./http/get/department.get')

const employeePost = require('./http/post/employee.post')
const teamPost = require('./http/post/team.post')
const teamLeadPost = require('./http/post/teamlead.post')

// app.use("*", (req, res) => {
//     const pathname = req.originalUrl.split("?")[0];

    
//     console.log(req.method, pathname);
    
//     res.send("");
// });
app.use(express.json())

app.use('/api/employee',employeeGet,employeePost)
app.use('/api/team',teamGet,teamPost)
app.use('/api/teamlead',teamLeadPost)
app.use('/api/departments',departmentGet)

app.listen(8000,() => {
    console.log("Listening at port 8000");
})