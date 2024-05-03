const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db");

// middleware
app.use(cors()); // easier then setting it up manually
app.use(express.json()); // Gives us access to the req body

// ROUTES

// create a todo

app.post("/todos", async (req, res, next) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *", // RETURNING * for returning data inside a rows array
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res, next) => {
  try {
    const todos = await pool.query("SELECT * FROM todo ");
    res.json(todos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await pool.query(
      "SELECT * FROM todo WHERE id = ($1)", // RETURNING * for returning data inside a rows array
      [id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo

// delete a todo

app.listen(5000, () => console.log("Server running on port 5000"));
