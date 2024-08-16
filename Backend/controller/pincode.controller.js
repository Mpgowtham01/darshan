const dbConfig = require("../database/config");

exports.createPincode = function (req, res) {
  console.log(req.body, "body");
  var country_id = req.body.country_id;
  var state_id = req.body.state_id;
  var city_id = req.body.city_id;
  var district_id = req.body.district_id;
  var pincode = req.body.pincode;
  var is_active = req.body.is_active;
  var sql = `INSERT INTO pincode
    (country_id,
    state_id,
    district_id,
    city_id,
    pincode,
    is_active)
    VALUES
    ("${country_id}",
    "${state_id}",
    "${district_id}",
    "${city_id}",
    "${pincode}",
    "${1}");`;
  try {
    dbConfig.query(sql, (err, rows, fields) => {
      if (err) console.log(err);
      else res.send(rows);
    });
  } catch (e) {
    throw e;
  }
};

exports.getAll = function (req, res) {
  try {
    dbConfig.query(
      `SELECT
      pincode.id, 
      pincode.country_id,
      pincode.state_id,
      pincode.district_id,
      pincode.city_id,
      pincode.pincode,
      pincode.is_active,
      countries.country,states.state, districts.district,
      city.city
      FROM pincode
      INNER JOIN 
      countries
      ON
      countries.id = pincode.country_id
      INNER JOIN
      states
      ON
      states.id = pincode.state_id
      INNER JOIN
      districts
      ON
      districts.id = pincode.district_id
      INNER JOIN
      city
      ON
      city.id = pincode.city_id;
      `,
      (err, rows, fields) => {
        if (err) console.log(err);
        else res.send(rows);
      }
    );
  } catch (e) {
    throw e;
  }
};

exports.updatePincode = function (req, res) {
  var country_id = req.body.country_id;
  var state_id = req.body.state_id;
  var city_id = req.body.city_id;
  var pincode = req.body.pincode;
  var is_active = req.body.is_active;
  var district_id = req.body.district_id;
  var sql = `UPDATE pincode
      SET    
      country_id = "${country_id}",
      state_id = "${state_id}",
      district_id = "${district_id}",
      city_id = "${city_id}",
      pincode = "${pincode}",
      is_active = "${is_active}"
      WHERE id = "${req.params.id}";`;
  try {
    dbConfig.query(sql, (err, rows, fields) => {
      if (err) console.log(err);
      else res.send(rows);
    });
  } catch (e) {
    throw e;
  }
};

exports.deletePincode = function (req, res) {
  try {
    dbConfig.query(
      `DELETE FROM pincode WHERE id = "${req.params.id}"`,
      (err, rows, fields) => {
        if (err) console.log(err);
        else res.send(rows);
      }
    );
  } catch (e) {
    throw e;
  }
};
