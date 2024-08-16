const express = require("express");
const dbConfig = require("../database/config");

const router = express.Router();

// Get all the Booking Fields
router.get("/getAll", (req, res) => {
    try {
        const query = `SELECT * FROM booking_fields`;
        dbConfig.query(query, (err, rows) => {
            if (err) {
                return res.status(400).json({ status: "Failed" });
            }

            res.json({ status: "Success", result: rows });
        });
    } catch (error) {
        res.status(500).json({ status: "Failed" });
    }
});

// Create Booking Fields
router.post("/create", (req, res) => {
    const { name, main_god_name, description } = req.body;

    try {
        const query = 'INSERT INTO booking_fields(name, main_god_name, description) VALUES (?, ?, ?)';
        const values = [name, main_god_name, description];
        
        dbConfig.query(query, values, (err, rows) => {
            if (err) {
                return res.status(400).json({ status: "Failed", error: err.message });
            }

            res.json({ status: "Success", result: rows });
        });
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
});

// Update Booking field
router.put("/update/:id", (req, res) => {
    const { name, main_god_name, description } = req.body;
    const { id } = req.params;

    try {
        const query = `UPDATE booking_fields SET name = ?, main_god_name = ?, description = ? WHERE id = ?`;
        const values = [name, main_god_name, description, id];

        dbConfig.query(query, values, (err, rows) => {
            if (err) {
                return res.status(400).json({ status: "Failed", error: err.message });
            }

            res.json({ status: "Success", result: rows });
        });
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
});


// Delete Booking Field
router.delete("/delete/:id", (req, res) => {
    try {
        const id = req.params.id;
        console.log("Id", id);
        const query = `DELETE FROM booking_fields WHERE id = '${id}'`;
        dbConfig.query(query, (err, rows) => {
            if (err) {
                return res.status(400).json({ status: "Failed" });
            }

            res.json({ status: "Success", result: rows });
        });
    } catch (error) {
        res.status(500).json({ status: "Failed" });
    }
});

module.exports = router;