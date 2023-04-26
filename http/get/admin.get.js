const express = require('express')
const app = express()

const adminModel = require('../../model/admin.model')

app.get('/masterpage', (req,res) => {
    adminModel.getMasterPageData((data,result)=>{
        let allData = []
        allData.push(data)
        if(result.length == data.length){
            res.status(200).send(allData)
        }
    })
})

module.exports = app