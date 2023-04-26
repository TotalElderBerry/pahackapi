const db = require('../db/db')

const teamleadModel = {}

 teamleadModel.getTeamLeaders = (callback) => {
    const query = `select * from teamleader inner join user on user.user_id = teamleader.user_id`

    db.query(query,(err,res) => {
        if(err) throw err
        if(res.length > 0){
            const all_teamlead = []
            for(const emp in res){
                const teamlead = {}
                teamlead.teamlead_id = res[emp]['team_leader_id'],
                teamlead.name = res[emp]['first_name'] + " " + res[emp]['last_name']
                teamlead.email = res[emp]['email'],
                teamlead.password = res[emp]['password']
                all_teamlead.push(teamlead)
            }
            callback(all_teamlead)
        }
    })
}



module.exports = teamleadModel