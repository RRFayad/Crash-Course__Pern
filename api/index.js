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

    const todo = await pool.query("SELECT * FROM todo WHERE id = ($1)", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo
app.patch("/todos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const todo = await pool.query(
      "UPDATE todo SET description = ($1) WHERE id = ($2) RETURNING *",
      [description, id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await pool.query(
      "DELETE FROM todo WHERE id = ($1) RETURNING *",
      [id]
    );
    console.log(todo);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
