const db = require('../db/db')

const schedSchedModel = {
    getShiftSchedules: (callback) => {
        const query = `SELECT * FROM shift_schedules`

        db.query(query, (err, res) => {
            if (err) {
                throw err
            }

            callback(res)
        });
    },

    deleteById: (id, callback) => {
        const query = `DELETE FROM shift_schedules WHERE id = ?`

        db.query(query, [id], (err, res) => {
            if (err) {
                throw err
            }

            callback(res)
        });
    },

    addShiftSchedule: (fromTime, toTime, callback) => {
        const query = `INSERT INTO shift_schedules (from_time, to_time) VALUES (?, ?)`

        db.query(query, [fromTime, toTime], (err, res) => {
            if (err) {
                throw err
            }

            callback(res.insertId);
        });
    },

    updateShiftSchedule: (id, fromTime, toTime, callback) => {
        const query = `UPDATE shift_schedules SET from_time = ?, to_time = ? WHERE id = ?`

        db.query(query, [fromTime, toTime, id], (err, res) => {
            if (err) {
                throw err
            }

            callback()
        });
    }
}

module.exports = schedSchedModel;