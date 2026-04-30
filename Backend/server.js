require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const routes = require("./routes/routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { 
  console.log(`Server started on port ${PORT} 🚀`); 
});

