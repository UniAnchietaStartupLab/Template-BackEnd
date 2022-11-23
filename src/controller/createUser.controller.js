const { randomUUID } = require("crypto");
const { config } = require("../migration/index");
var sql = require("mssql");

var CreateUser = {
  createUser: async (req, res) => {
    const { usuario, email, senha, nome, tipo } = req.body;
    const uuid = randomUUID();

    sql.connect(config, function (err) {
      if (err) console.log(err);

      var request = new sql.Request();

      request.input("usuario", sql.VarChar, usuario);
      request.input("email", sql.VarChar, email);
      request.input("senha", sql.VarChar, senha);
      request.input("nome", sql.VarChar, nome);
      request.input("tipo", sql.VarChar, tipo);
      request.input("uuid", sql.VarChar, uuid);

      request.query(
        "INSERT INTO DTB_USERS (uuid, nome, usuario, email, senha, tipo) VALUES(@uuid,@nome,@usuario,@email,@senha,@tipo)",
        function (err, { recordset }) {
          if (err) console.log(err);

          console.log(recordset);
          return res.status(200).send(recordset);
        }
      );
    });
  },
};

module.exports = { CreateUser };
