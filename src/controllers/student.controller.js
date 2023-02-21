let newStudent = require("../model/student.model.js");

const express = require("express");
const app = express();

app.use(express.json());

app.post("/new-student", async (request, response) => {
    const user = new newStudent(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/all", async (request, response) => {
    const students = await newStudent.find({});
  
    try {
      response.send(students);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.get("/:studentid", async (request, response) => {
    const student = await newStudent.find({studentid: request.params.studentid});
  
    try {
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
});



module.exports = app;