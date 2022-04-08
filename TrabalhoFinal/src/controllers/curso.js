const models = require("../models/index");
const Curso = models.Curso;
const Area = models.Area;

const index = async (req, res) => {
  const cursos = await Curso.findAll();
  const areas = await Area.findAll();
  const areasResult = areas.map((area) => area.toJSON());
  const cursosResult = cursos.map((curso) => curso.toJSON());

  cursosResult.map((curso) => {
    areasResult.map((area) => {
      if (area.id === curso.areaId) curso.area = area.area;
    });
  });

  res.render("curso/index", {
    cursos: cursosResult,
  });
};

const read = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);

    res.render("curso/read", {
      curso: curso.toJSON(),
    });
  } catch (err) {
    console.log(err);
  }
};

const create = async (req, res) => {
  if (req.route.methods.get) {
    const areas = await Area.findAll();
    res.render("curso/create", {
      areas: areas.map((area) => area.toJSON()),
    });
  } else {
    try {
      await Curso.create({
        nome: req.body.nome,
        areaId: req.body.areaId,
        descricao: req.body.descricao,
      });
      res.redirect("/cursos");
    } catch (err) {
      console.log(err);
    }
  }
};

const update = async (req, res) => {};

const remove = async (req, res) => {
  const curso = await Curso.findByPk(req.params.id);

  if (curso) {
    curso.destroy();
  }

  res.redirect("/cursos");
};

module.exports = { index, read, create, update, remove };
