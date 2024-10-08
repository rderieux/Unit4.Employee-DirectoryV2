const express = require("express");
const router = express.Router();
module.exports = router;

const employees = require("../data/employees");

router.get("/", (req, res) => {
  res.send("Hello employees!");
});

router.get("/", (req, res) => {
  res.json(employees);
});

router.get("/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});

router.post("/", (req, res, next) => {
  const { employeeName } = req.body;
  const employeeId = employees.length + 2;
  if (!employeeName) {
    next({ status: 404, message: "Pleae provide a valid name." });
  } else {
    employees.push({ id: employeeId, name: employeeName });
    res.status(201).json({ id: employeeId, name: employeeName });
  }
});
