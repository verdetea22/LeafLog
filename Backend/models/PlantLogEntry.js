// models/PlantLogEntry.js
const mongoose = require("mongoose");

import mongoose from "mongoose";

const plantLogEntrySchema = new mongoose.Schema({
    common_name: { type: String, required: true, trim: true },
    scientific_name: { type: String, required: true, trim: true },
    other_name: { type: String, trim: true },
    cycle: { type: String, required: true, trim: true },
    watering: { type: String, required: true, trim: true },
    sunlight: { type: String, required: true, trim: true },
    // Add any other fields you need for a plant log entry
}, { timestamps: true });

const PlantLogEntry =
    mongoose.models.PlantLogEntry ||
    mongoose.model("PlantLogEntry", plantLogEntrySchema);


// API endpoint to handle POST requests
router.post("/plant-logs", async(req, res) => {
    try {
        const newPlantLogEntry = new PlantLogEntry(req.body);
        await newPlantLogEntry.save(); // Save the plant log entry to the database
        res.status(201).json(newPlantLogEntry); // Send back the saved entry
    } catch (error) {
        res.status(400).json({ message: "Error saving plant log entry", error });
    }
});

module.exports = PlantLogEntry;