const { pool } = require("../migration/index");

async function ListUsers(req, res) {
  try {
    const { rows } = await pool.query("SELECT * FROM DTB_USERS");
    return res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = { ListUsers };
