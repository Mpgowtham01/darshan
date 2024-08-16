const dbConfig = require("../database/config");

exports.thoshamCreate = (req, res) => {
  const thosham_name = req.body.thosham_name;
  const godname = req.body.godname;
  const description = req.body.description;
  const manthiram = req.body.manthiram;
  const thoshamImage = req.body.thoshamImage;
  const created_by = req.body.created_by || 1;
  const is_active = req.body.is_active || 1;

  console.log("req.body", req.body);

  const sql = `INSERT INTO thosham
      (thosham_name, godname, description, manthiram, thoshamImage, created_by, is_active)
      VALUES (?, ?, ?, ?, ?, ?, ?)`;

  dbConfig.query(
    sql,
    [
      thosham_name,
      godname,
      description,
      manthiram,
      thoshamImage,
      created_by,
      is_active,
    ],
    function (err, rows) {
      if (err) {
        res.status(500).json({ error: "save failed", err: err });
      } else {
        res.status(201).json(rows);
      }
    }
  );
};

exports.thoshamGetAll = (req, res) => {
  try {
    dbConfig.query(`SELECT * FROM thosham`, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  } catch (e) {
    throw e;
  }
};

exports.thoshamUpdate = (req, res) => {
  const id = req.params.id;
  const thosham_name = req.body.thosham_name;
  const godname = req.body.godname;
  const description = req.body.description;
  const manthiram = req.body.manthiram;
  const thoshamImage = req.body.thoshamImage;
  const created_by = req.body.created_by || 0;
  const is_active = req.body.is_active || 0;

  const sql = `UPDATE thosham SET 
      thosham_name = ?,
      godname = ?,
      description = ?,
      manthiram = ?,
      thoshamImage = ?,
      created_by = ?,
      is_active = ?
      WHERE id = ?`;

  const values = [
    thosham_name,
    godname,
    description,
    manthiram,
    thoshamImage,
    created_by,
    is_active,
    id,
  ];

  console.log("SQL Query: ", sql);

  dbConfig.query(sql, values, function (err, rows, result) {
    if (err) {
      console.error("Update Failed: ", err);
      res.status(500).json({ error: "Update failed", err: err });
    } else {
      console.log("Record Updated Successfully");
      res.status(200).json(rows);
    }
  });
};

exports.thoshamDelete = (req, res) => {
  dbConfig.query(
    `DELETE FROM thosham WHERE id = ${req.params.id}`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};
