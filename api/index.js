const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors()); // easier then setting it up manually
app.use(express.json()); // Gives us access to the req body

app.listen(5000, () => console.log("Server running on port 5000"));
