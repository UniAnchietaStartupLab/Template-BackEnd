const { config } = require("../migration/index");
var sql = require("mssql");

var ValidateUser = {
  validateUser: async (req, res) => {
    const { email, senha } = req.body;

    sql.connect(config, function (err) {
      if (err) console.log(err);

      var request = new sql.Request();

      request.input("email", sql.VarChar, email);
      request.input("senha", sql.VarChar, senha);

      request.query(
        "SELECT * FROM DTB_USERS WHERE EMAIL = @email AND SENHA = @senha",
        function (err, { recordset }) {
          if (err) console.log(err);

          console.log(recordset);
          return res.status(200).send(recordset);
        }
      );
    });
  },
};

module.exports = { ValidateUser };
