const { pool } = require("../migration/index");

async function DataUser(req, res) {
  const { uuid } = req.params;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM DTB_USERS WHERE uuid = $1",
      [uuid]
    );

    return await res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = { DataUser };
