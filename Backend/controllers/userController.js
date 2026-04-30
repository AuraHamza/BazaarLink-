const pool = require("../config/db");
const bcrypt = require("bcrypt");


const getHome = (req, res) => {
  res.send("Server running 🚀");
};

const getHi = (req, res) => {
  res.send("helllo");
};

const takeData = (req, res) => {
  const { name } = req.body;
  res.send(name);
};

const signup = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    // 1. Validate required fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "name, email, password, role are required",
      });
    }

    // 2. Validate role (ENUM safety check)
    const allowedRoles = [
      "customer",
      "shop_admin",
      "market_admin",
      "platform_admin",
    ];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role selected",
      });
    }

    // 3. Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Insert user
    const newUser = await pool.query(
      `INSERT INTO users 
      (name, email, password, phone, role) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING user_id, name, email, phone, role, status, created_at`,
      [name, email, hashedPassword, phone || null, role]
    );

    res.status(201).json({
      message: "User created successfully",
      user: newUser.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};



module.exports = {
  getHome,
  getHi,
  takeData,
  signup,
};


