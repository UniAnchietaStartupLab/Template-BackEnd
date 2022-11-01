const { pool } = require("../migration/index");

async function ValidateUser(req, res) {
  const { email, senha } = req.body;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM DTB_USERS WHERE email = $1 AND senha = $2",
      [email, senha]
    );

    return await res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = { ValidateUser };
