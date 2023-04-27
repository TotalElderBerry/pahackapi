const db = require('../db/db')

const hazardPayModel = {
    gethazardPays: (callback) => {
        const query = `SELECT * FROM hazard_pays`

        db.query(query, (err, res) => {
            if (err) {
                throw err
            }

            callback(res)
        });
    },

    deleteById: (id, callback) => {
        const query = `DELETE FROM hazard_pays WHERE id = ?`

        db.query(query, [id], (err, res) => {
            if (err) {
                throw err
            }

            callback(res)
        });
    },

    addHazardPay: (area, pay, callback) => {
        const query = `INSERT INTO hazard_pays (area_name, pay) VALUES (?, ?)`

        db.query(query, [area, pay], (err, res) => {
            if (err) {
                throw err
            }

            callback(res.insertId);
        });
    },

    updateHazardPay: (id, area, pay, callback) => {
        const query = `UPDATE hazard_pays SET area_name = ?, pay = ? WHERE id = ?`

        db.query(query, [area, pay, id], (err, res) => {
            if (err) {
                throw err
            }

            callback()
        });
    }
}

module.exports = hazardPayModel;