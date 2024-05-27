const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


mongoose
  .connect('mongodb+srv://goldemfoxy:gKdvlQGHzNS9maql@cluster0.a4dbyaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log(`Connected to MongoDB...`);
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

