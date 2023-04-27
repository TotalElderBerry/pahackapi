const express = require('express')
const app = express()

const adminModel = require('../../model/admin.model')

app.get('/masterpage', (req,res) => {
    adminModel.getMasterPageData((data,result)=>{
        let allData = []
        allData.push(data)

        if (data.length == 0 || !result) {
            res.status(200).send([]);
            return;
        }

        if(result.length == data.length){
            console.log("firdst",result);
            res.status(200).send(allData)
            return
        }
        if(result.length == 0){
            console.log("second",result);

            res.status(200).send("empty")
            return
        }
        console.log(result);
    })
})

module.exports = app