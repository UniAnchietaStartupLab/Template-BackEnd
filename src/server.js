const express = require("express");
const cors = require("cors");
const { PORT } = require("dotenv/config");

const routes = require("./routes/user.routes.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
routes.use(express.json());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
