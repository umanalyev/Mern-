const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/link", require("./routes/link"));
app.use("/t", require("./routes/redirect"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(
      config.get("mongoUrl"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      () => console.log("Connected to DB")
    );

    app.listen(PORT, console.log("server is running...."));
  } catch (e) {
    console.log(e);
  }
}
start();
