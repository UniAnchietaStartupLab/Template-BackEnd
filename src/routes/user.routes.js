const { Router } = require("express");

const { ListUsers } = require("../controller/listUser.controller.js");
const { DataUser } = require("../controller/dataUser.controller.js");
const { CreateUser } = require("../controller/createUser.controller.js");
const { ValidateUser } = require("../controller/validateUser.controller.js");

const routes = Router();
module.exports = routes;

routes.get("/listUsers", ListUsers);
routes.get("/dataUser/:uuid", DataUser);
routes.post("/createUser", CreateUser);
routes.post("/validateUser", ValidateUser);
