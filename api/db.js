const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.POSTGRES_PW,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
