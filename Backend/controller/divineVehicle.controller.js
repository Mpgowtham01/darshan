const dbConfig = require("../database/config");

let divineVehicle = {};

divineVehicle.createDivineVehicle = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const { title, description } = req.body;

      const sql = `INSERT INTO devinevehicle (title, description) VALUES (?, ?)`;
      const values = [title, description];

      dbConfig.query(sql, values, (err, result) => {
        if (err) {
          console.log("Database error:", err);
          return reject({ status: 500, message: "Error occurred" });
        } else {
          return resolve({
            status: 200,
            message: "Divine Vehicle created successfully",
          });
        }
      });
    } catch (e) {
      console.log("Internal server error:", e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

divineVehicle.getAllDivineVehicle = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM devinevehicle`;

    dbConfig.query(sql, (err, results) => {
      if (err) {
        console.log("Database error:", err);
        return reject({ status: 500, message: "Error occurred" });
      } else {
        return resolve({ status: 200, data: results });
      }
    });
  });
};

module.exports = divineVehicle;
