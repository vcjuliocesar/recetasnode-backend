const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recetas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify:false
    }).then(db => {
        console.log(`DB is connected to ${db.connection.host}`);
    });
  } catch (error) {
    console.log(`Failed to connect to ${db.connection.host}`, error);
  }
};

module.exports = db;
