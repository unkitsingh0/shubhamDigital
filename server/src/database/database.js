const mongoose = require("mongoose");

function connectingToDatabase(uri) {
  mongoose
    .connect(uri)
    .then((e) => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });
}

module.exports = connectingToDatabase;
