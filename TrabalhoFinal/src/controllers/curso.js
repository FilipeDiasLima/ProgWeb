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
    const area = await Area.findByPk(curso.toJSON().areaId);
    res.render("curso/read", {
      curso: curso.toJSON(),
      area: area.toJSON(),
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

const update = async (req, res) => {
  const curso = await Curso.findByPk(req.params.id);
  if (req.route.methods.get) {
    const areas = await Area.findAll();
    res.render("curso/update", {
      curso: curso.toJSON(),
      areas: areas.map((area) => area.toJSON()),
    });
  } else {
    try {
      await Curso.update(
        {
          nome: req.body.nome,
          areaId: Number(req.body.areaId),
          descricao: req.body.descricao,
        },
        { where: { id: req.params.id } }
      );
      res.redirect("/cursos");
    } catch (err) {
      console.log(err);
    }
  }
};

const remove = async (req, res) => {
  const curso = await Curso.findByPk(req.params.id);
  console.log(curso);
  if (curso) {
    curso.destroy();
  }

  res.redirect("/cursos");
};

module.exports = { index, read, create, update, remove };
