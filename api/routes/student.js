import express from "express";
const router = express.Router();
import connection from "../db/index.js";

router.get("/student/:id?", (req, res) => {
  const { id } = req.params;
  const query = id ? `SELECT * FROM studentdetailstable WHERE student_id = ${id}` : `SELECT * FROM studentdetailstable`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.json({ data: results });
  });
});

router.post("/student?", (req, res) => {
  const { name, clase, phone, email } = req.body;
  const query = `INSERT INTO studentdetailstable(student_name, student_class,student_phone_number,  student_email) VALUES ('${name}', '${clase}', '${phone}', '${email}');`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.json({ data: "user created" });
  });
});

router.put("/student?/:id", (req, res) => {
  const { id } = req.params;
  const { name, clase, phone, email } = req.body;
  const query = `UPDATE  studentdetailstable SET student_name = '${name}', student_class='${clase}', student_phone_number='${phone}',  student_email='${email}' WHERE student_id = ${id}`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.json({ data: "user updated" });
  });
});

router.delete("/student?/:id", (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM studentdetailstable WHERE student_id = ${id}`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.json({ data: "user deleted" });
  });
});

export default router;
