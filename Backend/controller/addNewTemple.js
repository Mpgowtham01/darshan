const dbConfig = require("../database/config");
const isEmpty = require("lodash.isempty");

exports.createAddnewTemple = async (req, res) => {
  try {
    var addNewTempleId = req.body.yatra_id;
    var mainGodName = req.body.mainGodName;
    var subGodName = req.body.mainGodName;
    var description = req.body.description;
    var story = req.body.story;



    const sql = `
      INSERT INTO yatra 
      (addNewTempleId,mainGodName,subGodName,description,story ) 
      VALUES (?,?, ?, ?, ?)
    `;

    const values = [addNewTempleId,mainGodName,subGodName,description,story];
    await new Promise((resolve, reject) => {
      dbConfig.query(sql, values, (err, result) => {
        if (err) {
          console.error("Database error!", err);
          return reject({ status: 500, message: "Error occurred" });
        } else {
          return resolve({ status: 200, message: "New Temple Added successfully", data: result });
        }
      });
    })
    .then(response => res.status(response.status).json({ message: response.message, data: response.data }))
    .catch(error => res.status(error.status).json({ message: error.message }));

  } catch (error) {
    console.error("Internal Server Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};