const createError = require("http-errors");
const requestTime = require("./middleware/request-time")

const path = require("path");
const rootRoutes = require("./routes/root");

const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "backend", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "backend", "static")));


app.use(requestTime);

app.use(express.static(path.join(__dirname, "backend", "static")));

app.use("/", rootRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use((request, response, next) => {
  next(createError(404));
});