const { Sequelize } = require("../models/index");
const models = require("../models/index");
const Scoreboard = models.Scoreboard;
const Usuario = models.Usuario;

const index = async (req, res) => {
  const scoreRecord = await Scoreboard.findAll({
    attributes: [Sequelize.fn("max", Sequelize.col("score"))],
    raw: true,
  });
  const prettierRecord = scoreRecord[0]["max(`score`)"].toString();
  res.render("main/game", {
    scoreRecord: prettierRecord,
  });
};

const ranking = async (req, res) => {
  const ranking = await Scoreboard.findAll({
    order: [["score", "DESC"]],
  });
  const usuarios = await Usuario.findAll();
  const usuariosArr = usuarios.map((user) => user.toJSON());
  const rankingArr = JSON.parse(JSON.stringify(ranking, null, 2));

  rankingArr.map((rank) => {
    usuariosArr.map((user) => {
      if (user.id === rank.userId) rank.nome = user.nome;
    });
  });
  res.render("main/ranking", {
    ranking: rankingArr,
  });
};

const save = async (req, res) => {
  try {
    if (req.session.uid) {
      const userId = req.session.uid && req.session.uid;
      const { score } = req.body;
      console.log(userId, score);
      await Scoreboard.create({
        userId: userId,
        score: score,
      });
      res.redirect("/game");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { index, ranking, save };
