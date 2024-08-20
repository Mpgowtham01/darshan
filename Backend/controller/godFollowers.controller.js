const dbConfig = require("../database/config");

let godFollowers = {};

godFollowers.createGodFollowers = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const { originalName, nickName, godName, description, adiyargalImage } =
        req.body;

      const sql = `INSERT INTO followers_Fields ( originalName,nickName,godName,description,adiyargalImage ) VALUES (?, ?,?,?,?)`;
      const values = [
        originalName,
        nickName,
        godName,
        description,
        adiyargalImage,
      ];

      dbConfig.query(sql, values, (err, result) => {
        if (err) {
          console.log("Database error:", err);
          return reject({ status: 500, message: "Error occurred" });
        } else {
          return resolve({
            status: 200,
            message: "Followers Created Successfully",
          });
        }
      });
    } catch (e) {
      console.log("Internal server error:", e);
      return reject({ status: 500, message: "Internal Server Error" });
    }
  });
};
godFollowers.updateFollowers = async (req) => {
    const id = req.params.id;
  
    try {
      const {
        originalName,
        nickName,
        godName,
        description,
        adiyargalImage,
      } = req.body;
  
      const sql = `UPDATE followers_Fields SET originalName = ?, nickName = ?, godName = ?, description = ?, adiyargalImage = ? WHERE id = ?`;
      const values = [originalName, nickName, godName, description, adiyargalImage, id];
  
      const result = await new Promise((resolve, reject) => {
        dbConfig.query(sql, values, (err, result) => {
          if (err) {
            console.error("Database error:", err);
            return reject(new Error("Database error"));
          }
          resolve(result);
        });
      });
  
      return {
        status: 200,
        message: "Updated successfully",
      };
    } catch (error) {
      console.error("Internal server error:", error);
      return {
        status: 500,
        message: error.message === "Database error" ? "Error occurred" : "Internal Server Error",
      };
    }
  };
  
godFollowers.getAllFollowers = async () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM followers_Fields`;

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
godFollowers.deleteFollowers = async (req) => {
  const id = req.params.id;

  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM followers_Fields WHERE id = ?`;

    dbConfig.query(sql, [id], (err, results) => {
      if (err) {
        console.log("Database error:", err);
        return reject({ status: 500, message: "Error occurred" });
      } else {
        return resolve({
          status: 200,
          message: "deleted successfully",
          data: results,
        });
      }
    });
  });
};

module.exports = godFollowers;
