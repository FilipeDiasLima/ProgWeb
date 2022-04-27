const models = require("../models/index");
const Curso = models.Curso;
const Usuario = models.Usuario;
const bcrypt = require("bcryptjs");

const index = async (req, res) => {
  if (req.session.uid) {
    const userId = req.session.uid && req.session.uid;
    const user = await Usuario.findOne({ where: { id: userId } });
    res.render("main/index", {
      layout: "main",
      nome: user.nome,
    });
  } else {
    res.render("main/index", {
      layout: "main",
    });
  }
};

const about = (req, res) => {
  res.render("main/about", { layout: "main" });
};

const ui = (req, res) => {
  res.render("main/ui");
};

const signIn = async (req, res) => {
  if (req.route.methods.get) {
    res.render("main/login");
  } else {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ where: { email: email } });
    if (user) {
      bcrypt.compare(senha, user.senha, (err, ok) => {
        if (ok) {
          req.session.uid = user.id;
          res.redirect("/");
        } else {
          res.render("main/login");
        }
      });
    }
  }
};

const signUp = async (req, res) => {
  if (req.route.methods.get) {
    const cursos = await Curso.findAll();
    res.render("main/register", {
      cursos: cursos.map((area) => area.toJSON()),
    });
  } else {
    const user = req.body;
    try {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.senha, salt, async (err, hash) => {
          console.log(hash);
          await Usuario.create({
            nome: user.nome,
            email: user.email,
            senha: hash,
            cursoId: user.cursoId,
          });
        });
      });
      // const newUser = await Usuario.findOne({ where: { email: user.email } });
      // console.log(newUser);
      // req.session.uid = newUser.id;
      res.redirect("/");
    } catch (err) {}
  }
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    else res.redirect("/");
  });
};

module.exports = { index, about, ui, signIn, signUp, logout };
