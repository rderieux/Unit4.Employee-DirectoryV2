const express = require("express");
const router = express.Router();
module.exports = router;

const employees = require("../data/employees");

app.get("/", (req, res) => {
  res.json(employees);
});

app.get("/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});
