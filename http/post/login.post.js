const db = require('../../db/db')
const express = require('express')
const app = express()

const login = require('../../model/shiftsched.model')

app.post("/",(req,res) => {
    // Get email and password
    let { email, password } = req.body;

    console.log(req.body);

    // If one of them is not provided
    if (email === undefined || password === undefined) {
        res.send({ error: "Invalid request!" });
        return;
    }

    // Trim the username and password
    email = email.trim();
    password = password.trim();

    db.query("SELECT * FROM admin a INNER JOIN user u ON a.user_id = u.user_id WHERE u.email = ? AND u.password = ?", [email, password], (err, result) => {
        if (err) {
            res.send({ error: "Internal server error!" });
            return;
        }

        if (result.length > 0) {
            res.send({ type: 1, id: result[0].admin_id })
            return;
        }

        db.query("SELECT * FROM employee e INNER JOIN user u ON e.user_id = u.user_id WHERE u.email = ? AND u.password = ?", [email, password], (err, result) => {
            if (err) {
                res.send({ error: "Internal server error!" });
                return;
            }

            console.log("EMPLOYEE:", result);
    
            if (result.length > 0) {
                res.send({ type: 2, id: result[0].employee_id })
                return;
            }

            db.query("SELECT * FROM teamleader t INNER JOIN user u ON t.user_id = u.user_id WHERE u.email = ? AND u.password = ?", [email, password], (err, result) => {
                if (err) {
                    res.send({ error: "Internal server error!" });
                    return;
                }

                console.log("TEAMLEAD:", result);
        
                if (result.length > 0) {
                    res.send({ type: 3, id: result[0].team_leader_id })
                    return;
                }

                res.send({ error: "Invalid credentials!" })
            });
        });
    });

    // Check if username and password is valid
    // db.checkLoginCredentials(user, pass, (userid) => {
    //     // If has error
    //     if (userid === null) {
    //         res.status(200).send(data.error("Internal server error!"));
    //         return;
    //     }

    //     // If invalid credentials
    //     if (typeof userid === "boolean" && !userid) {
    //         res.send(data.error("Invalid credentials!"));
    //         return;
    //     }

    //     // Get session instance
    //     const session = FireduinoSession.getInstance();
    //     // Generate a JWT token
    //     const token = session.generateToken({ uid: userid });
    //     // Otherwise, return 200
    //     res.send(data.success("Login successful!", token));
    // });
})

module.exports = app