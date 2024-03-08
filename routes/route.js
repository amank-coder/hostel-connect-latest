const express = require("express")
const router = express.Router()

router.get("/", (req, res) => res.json({ message: `Hello from Docker v3 hello 🎉` }));

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

module.exports= router