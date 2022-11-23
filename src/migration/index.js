const {
  DB_USER,
  DB_PASSWORD,
  DB_SERVER,
  DB_DATABASE,
} = require("dotenv/config");

const { Connection } = require("tedious");

var config = {
  server: process.env.DB_SERVER,
  authentication: {
    type: "default",
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
    database: process.env.DB_DATABASE,
  },
};

const connection = new Connection(config);

connection.connect(function (err) {
  if (err) {
    console.log("Connection Failed!");
    throw err;
  }
});

module.exports = { config };
