
let mongoose = require("mongoose")

const studentDetails = new mongoose.Schema({
    surName: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    studentid: {
        type: String,
        require: true
    }
    ,
    hall: {
        type: String,
        dafault: "non resident"
    },
    programmeOfStudy: {
        type: String,
        require: true,
    },
});

const Student = mongoose.model("Student", studentDetails);
module.exports = Student;