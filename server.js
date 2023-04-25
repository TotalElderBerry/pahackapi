const express = require('express')
const app = express()

const employeeGet = require('./get/employee.get')

// app.use("*", (req, res) => {
//     const pathname = req.originalUrl.split("?")[0];

    
//     console.log(req.method, pathname);
    
//     res.send("");
// });
app.use(express.json())
app.use('/api/employee',employeeGet)

app.listen(8000,() => {
    console.log("Listening at port 8000");
})