const express = require("express");
const MainController = require("../controllers/main");
const AreaController = require("../controllers/area");
const CursoController = require("../controllers/curso");
const router = express.Router();

router.get("/", MainController.index);
router.get("/about", MainController.about);
router.get("/ui", MainController.ui);
router.get("/game", MainController.game);

router.get("/areas", AreaController.index);

router.get("/cursos", CursoController.index);
router.get("/cursos/create", CursoController.create);
router.post("/cursos/create", CursoController.create);
router.get("/cursos/update/:id", CursoController.update);
router.post("/cursos/update/:id", CursoController.update);
router.post("/cursos/remove/:id", CursoController.remove);
router.get("/cursos/:id", CursoController.read);

module.exports = router;
