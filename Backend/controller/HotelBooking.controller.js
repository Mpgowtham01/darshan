const dbConfig = require("../database/config");

const hotelBooking = {};

hotelBooking.bookHotel = async (req) => {
  console.log("req.body :>> ", req.body);
  return new Promise((resolve, reject) => {
    try {
      const {
        hotelName,
        price,
        offerPrice,
        images,
        country,
        state,
        district,
        city,
        area,
        address,
        facilities,
        nearby,
        checkin,
        checkout,
        cancelationPolicy,
        childrenAndBeds,
        ageRestriction,
        pets,
      } = req.body;

      const imagesJson = JSON.stringify(images);

      const sql = `INSERT INTO hotel_booking (
                      hotelName, 
                      price, 
                      offerPrice, 
                      images, 
                      country, 
                      state, 
                      district, 
                      city, 
                      area, 
                      address, 
                      facilities, 
                      nearby, 
                      checkin, 
                      checkout, 
                      cancelationPolicy, 
                      childrenAndBeds, 
                      ageRestriction, 
                      pets, 
                      created_at, 
                      updated_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;

      const values = [
        hotelName,
        price,
        offerPrice,
        imagesJson,
        country,
        state,
        district,
        city,
        area,
        address,
        facilities,
        nearby,
        checkin,
        checkout,
        cancelationPolicy,
        childrenAndBeds,
        ageRestriction,
        pets,
      ];

      dbConfig.query(sql, values, (err, result) => {
        if (err) {
          console.log("err!", err);
          return reject({ status: 500, message: "Error occurred" });
        } else {
          return resolve({ status: 200, message: "Hotel booked successfully" });
        }
      });
    } catch (e) {
      console.log(e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};

hotelBooking.getHotel = async () => {
  return new Promise((resolve, reject) => {
    try {
      const sql = `SELECT * FROM hotel_booking`;

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

module.exports = hotelBooking;
