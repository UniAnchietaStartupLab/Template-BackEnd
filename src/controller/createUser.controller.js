const { randomUUID } = require("crypto");
const { pool } = require("../migration/index");

async function CreateUser(req, res) {
  const { usuario, email, senha, nome, tipo } = req.body;
  const uuid = randomUUID();

  try {
    const newSession = await pool.query(
      "INSERT INTO DTB_USERS (uuid, nome, usuario, email, senha, tipo) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [uuid, nome, usuario, email, senha, tipo]
    );

    return await res.status(200).send(newSession.rows);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
}

module.exports = { CreateUser };
