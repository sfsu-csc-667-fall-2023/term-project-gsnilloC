const path = require("path");
const rootRoutes = require("./routes/root");
const createError = require("http-errors");
//const requestTime = require("./backend/middleware/request-time");


const express = require("express");
const app = express();

//app.use(requestTime);

app.use("/", rootRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use((request, response, next) => {
  next(createError(404));
});