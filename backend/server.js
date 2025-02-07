require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then((response) => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const RecordSchema = new mongoose.Schema({
  name: String,
  score: Number,
});

const Record = mongoose.model("Record", RecordSchema);

app.get("/records", async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/records", async (req, res) => {
    try {
      const newRecord = new Record(req.body);
      await newRecord.save();
      res.status(201).json(newRecord);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

app.listen(5001, () => console.log("Server running on port 5001"));
