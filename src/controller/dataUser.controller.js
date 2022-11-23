const { config } = require("../migration/index");
var sql = require("mssql");

var DataUser = {
  dataUser: async (req, res) => {
    const { uuid } = req.params;
    sql.connect(config, function (err) {
      if (err) console.log(err);

      var request = new sql.Request();

      request.input("uuid", sql.VarChar, uuid);

      request.query(
        "SELECT * FROM DTB_USERS WHERE uuid = @uuid",
        function (err, { recordset }) {
          if (err) console.log(err);

          console.log(recordset);
          return res.status(200).send(recordset);
        }
      );
    });
  },
};

module.exports = { DataUser };
