const { Router } = require("express");

const { ListUsers } = require("../controller/listUser.controller.js");
const { DataUser } = require("../controller/dataUser.controller.js");
const { CreateUser } = require("../controller/createUser.controller.js");
const { ValidateUser } = require("../controller/validateUser.controller.js");

const routes = Router();
module.exports = routes;

routes.get("/listUsers", ListUsers.listUsers);
routes.get("/dataUser/:uuid", DataUser.dataUser);
routes.post("/createUser", CreateUser.createUser);
routes.post("/validateUser", ValidateUser.validateUser);
