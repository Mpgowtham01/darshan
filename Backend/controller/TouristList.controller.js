const dbConfig = require("../database/config");
require("dotenv").config();

let touristlist = {};

touristlist.create = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const {
        name,
        description,
        speciality,
        country,
        state,
        district,
        city,
        area,
        pincode,
        templename,
        images,
        country_id,
        state_id,
        district_id,
        city_id,
        area_id,
      } = req.body;

      const sql = `
      INSERT INTO touristlist (
        name,description,speciality,country,state,district,city,area,pincode,templename,images,country_id,state_id,district_id,city_id,area_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?)
    `;

      const values = [
        name,
        description,
        JSON.stringify(speciality),
        country,
        state,
        district,
        city,
        area,
        pincode,
        JSON.stringify(templename),
        images,
        country_id,
        state_id,
        district_id,
        city_id,
        area_id,
      ];

      dbConfig.query(sql, values, (err, response) => {
        if (err) {
          console.log("Database error:", err);
          return reject({ status: 500, message: "Error occurred" });
        } else {
          return resolve({
            status: 200,
            message: "Tourist List created successfully",
          });
        }
      });
    } catch (e) {
      console.log("Internal server error:", e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

touristlist.getAll = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const sql = "SELECT * FROM touristlist";
      dbConfig.query(sql, (err, response) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(response);
        }
      });
    } catch (err) {
      return reject(err);
    }
  });
};

touristlist.update = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const {
        id,
        name,
        description,
        speciality,
        country,
        state,
        district,
        city,
        area,
        pincode,
        templename,
        images,
        country_id,
        state_id,
        district_id,
        city_id,
        area_id,
      } = req.body;

      if (!id) {
        return reject({
          status: 400,
          message: "ID is required to update the tourist list.",
        });
      }
      const sql = `
      UPDATE touristlist
      SET
        name = ?,
        description = ?,
        speciality = ?,
        country = ?,
        state = ?,
        district = ?,
        city = ?,
        area = ?,
        pincode = ?,
        templename = ?,
        images = ?,
        country_id = ?,
        state_id = ?,
        district_id = ?,
        city_id = ?,
        area_id = ?
      WHERE id = ?
    `;

      const values = [
        name,
        description,
        JSON.stringify(speciality),
        country,
        state,
        district,
        city,
        area,
        pincode,
        JSON.stringify(templename),
        images || null,
        country_id || null,
        state_id || null,
        district_id || null,
        city_id || null,
        area_id ? area_id : null,
        id,
      ];

      dbConfig.query(sql, values, (err, response) => {
        if (err) {
          console.log("Database error:", err);
          return reject({ status: 500, message: "Error occurred" });
        } else {
          if (response.affectedRows > 0) {
            return resolve({
              status: 200,
              message: "Tourist List updated successfully",
            });
          } else {
            return reject({
              status: 400,
              message: "No record updated. Please check the ID.",
            });
          }
        }
      });
    } catch (e) {
      console.log("Internal server error:", e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

touristlist.delete = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      var id = req.params.id;
      console.log("id :>> ", id);
      const sql = `DELETE FROM touristlist where id = ${id}`;
      dbConfig.query(sql, (err, response) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(response);
        }
      });
    } catch (err) {
      return reject(err);
    }
  });
};

module.exports = touristlist;
