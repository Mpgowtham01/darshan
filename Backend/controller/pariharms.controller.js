const dbConfig = require("../database/config");

//getallBlogs
// exports.pariharamsGetAll = (req, res) => {
//   try {
//     dbConfig.query(
//       `SELECT pariharam_id, pariharam_name
//         FROM pariharams ORDER BY pariharam_id DESC`,
//       (err, rows, fields) => {
//         if (!err) {
//           res.send(rows);
//           // console.log(rows, "rows");
//         } else {
//           console.log(err);
//         }
//       }
//     );
//   } catch (e) {
//     throw e;
//   }
// };
exports.pariharamsGetAll = (req, res) => {
  try {
    dbConfig.query(`SELECT * FROM pariharams`, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
        // console.log(rows, "rows");
      } else {
        console.log(err);
      }
    });
  } catch (e) {
    throw e;
  }
};
// //pariharams get all
// exports.pariharamsGetAll = (req, res) => {
//   dbConfig.query("SELECT * FROM pariharams", (err, rows, field) => {
//     if (!err) res.send(rows);
//     else console.log(err);
//   });
// };

//pariharams name get One
exports.pariharamsGetOne = (req, res) => {
  dbConfig.query(
    `SELECT * FROM pariharams WHERE pariharam_id = ${req.params.id}`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

//Constant Name Create Schema
// exports.pariharamsCreate = (req, res) => {
//   var pariharam_name = req.body.pariharam_name;
//   var created_by = req.body.created_by || 1;
//   var is_active = req.body.is_active || 1;
//   var description = req.body.description;
//   var manthiram = JSON.stringify(req.body.manthiram);
//   var pariharamImage = req.body.pariharamImage;
//   var mainGodName = req.body.mainGodName;

//   console.log("req.body", req.body);

//   var sql = `INSERT INTO pariharams
//     ( pariharam_name,created_by, is_active,description,manthiram,pariharamImage,mainGodName) VALUES
//       ("${pariharam_name}","${created_by}","${is_active}","${description}","${manthiram}","${pariharamImage}","${mainGodName}")`;
//   console.log(sql, "here");
//   dbConfig.query(sql, function (err, rows) {
//     if (err !== null) {
//       res.status(500).json({ error: "save failed", err: err });
//     } else {
//       res.status(201).json(rows);
//     }
//   });
// };

exports.pariharamsCreate = (req, res) => {
  const pariharam_name = req.body.pariharam_name;
  const created_by = req.body.created_by || 1;
  const is_active = req.body.is_active || 1;
  const description = req.body.description;
  const manthiram = req.body.manthiram;
  const pariharamImage = req.body.pariharamImage;
  const mainGodName = req.body.mainGodName;

  console.log("req.body", req.body);

  const sql = `INSERT INTO pariharams
    (pariharam_name, created_by, is_active,description,pariharamImage, mainGodName,manthiram )
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  dbConfig.query(
    sql,
    [
      pariharam_name,
      created_by,
      is_active,
      description,
      pariharamImage,
      mainGodName,
      manthiram,
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

//pariharams  update

exports.pariharamsUpdate = (req, res) => {
  const pariharam_id = req.params.id; // Ensure this matches your route parameter
  const pariharam_name = req.body.pariharam_name;
  const created_by = req.body.created_by || 1;
  const is_active = req.body.is_active || 1;
  const description = req.body.description;
  const manthiram = req.body.manthiram;
  const pariharamImage =
    req.body.pariharamImage !== "undefined" ? req.body.pariharamImage : null;
  const mainGodName = req.body.mainGodName;

  console.log("req.body :>> ", req.body);

  const sql = `UPDATE pariharams SET 
    pariharam_name = ?,
    created_by = ?,
    is_active = ?,
    description = ?,
    pariharamImage = ?,
    mainGodName = ?,
    manthiram = ?
    WHERE pariharam_id = ?`;

  dbConfig.query(
    sql,
    [
      pariharam_name,
      created_by,
      is_active,
      description,
      pariharamImage,
      mainGodName,
      manthiram,
      pariharam_id, // Ensure pariharam_id is the last parameter
    ],
    function (err, result) {
      if (err) {
        console.error("Error updating record:", err);
        res.status(500).json({ error: "Update failed", err: err });
      } else {
        res
          .status(200)
          .json({ message: "Record updated successfully", result });
      }
    }
  );
};

//Constant name Delete
exports.pariharamsDelete = (req, res) => {
  dbConfig.query(
    `DELETE FROM pariharams WHERE pariharam_id = ${req.params.id}`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};
