const express = require('express')
const app = express()

const departmentModel = require('../../model/department.model')

app.get('/', (req,res) => {
    departmentModel.getDepartmentsWithTeams((data)=>{
        console.log(data);
        if(data.length == 17){
            res.status(200).send({"department":data})
        }
    })
})


module.exports = app