const { config } = require("../migration/index");
var sql = require("mssql");

var ListUsers = {
  listUsers: async (req, res) => {
    sql.connect(config, function (err) {
      if (err) console.log(err);

      var request = new sql.Request();

      request.query("SELECT * FROM DTB_USERS", function (err, { recordset }) {
        if (err) console.log(err);

        console.log(recordset);
        return res.status(200).send(recordset);
      });
    });
  },
};

module.exports = { ListUsers };
