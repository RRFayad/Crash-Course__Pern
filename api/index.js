const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db");

// middleware
app.use(cors()); // easier then setting it up manually
app.use(express.json()); // Gives us access to the req body

// ROUTES

// create a todo

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(5000, () => console.log("Server running on port 5000"));
