const getAccumulatedAttendanceBonus = (records,month) => {
    const filteredrecords = records.filter((r) => r.month === month)
    console.log(filteredrecords);
    return (1000/20) * filteredrecords.length
}

module.exports = getAccumulatedAttendanceBonus