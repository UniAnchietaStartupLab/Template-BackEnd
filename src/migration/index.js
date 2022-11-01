const { Pool } = require("pg");
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
} = require("dotenv/config");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  ssl: true,
  rejectUnauthorized: (process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"),
});

module.exports = { pool };
