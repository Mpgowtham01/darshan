const dbConfig = require("../database/config");

const yatraBooking = {};

yatraBooking.bookTrip = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const {
        title,
        from: from_location,
        to: to_location,
        designation,
        days,
        dayslist,
        price,
        offerPrice,
        overview,
        whatIsIncluded,
        meetingPoint,
        endPoint,
        images,
      } = req.body;

      const designationJson = JSON.stringify(designation);
      const dayslistJson = JSON.stringify(dayslist);
      const imagesJson = JSON.stringify(images);

      const sql = `INSERT INTO yatra_booking (title, from_location, to_location, designation, days, dayslist, price, offerPrice, overview, what_is_included, meeting_point, end_point, images) 
                          VALUES ('${title}', '${from_location}', '${to_location}', '${designationJson}', '${days}', '${dayslistJson}', '${price}', '${offerPrice}', '${overview}', '${whatIsIncluded}', '${meetingPoint}', '${endPoint}', '${imagesJson}')`;

      dbConfig.query(sql, (err, result) => {
        if (err) {
          console.log("err!", err);
          return reject({ status: 500, message: "error occurred" });
        } else {
          return resolve({ status: 200, message: "trip booked successfully" });
        }
      });
    } catch (e) {
      console.log(e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

yatraBooking.getTrips = async () => {
  return new Promise((resolve, reject) => {
    try {
      const sql = `SELECT * FROM yatra_booking`;

      dbConfig.query(sql, (err, results) => {
        if (err) {
          console.log("err!", err);
          return reject({ status: 500, message: "error occurred" });
        } else {
          return resolve(results);
        }
      });
    } catch (e) {
      console.log(e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

yatraBooking.getTripById = async (id) => {
  return new Promise((resolve, reject) => {
    try {
      const sql = `SELECT * FROM yatra_booking WHERE id = ?`;

      dbConfig.query(sql, [id], (err, result) => {
        if (err) {
          console.log("err!", err);
          return reject({ status: 500, message: "error occurred" });
        } else if (result.length === 0) {
          return reject({ status: 404, message: "Trip not found" });
        } else {
          return resolve(result[0]);
        }
      });
    } catch (e) {
      console.log(e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

module.exports = yatraBooking;
