const express = require("express");
const MainController = require("../controllers/main");
const AreaController = require("../controllers/area");
const CursoController = require("../controllers/curso");
const GameController = require("../controllers/game");
const router = express.Router();
const authCheck = require("../utils/authCheck");

router.get("/login", MainController.signIn);
router.post("/login", MainController.signIn);
router.get("/logout", MainController.logout);

router.get("/register", MainController.signUp);
router.post("/register", MainController.signUp);

router.get("/", MainController.index);
router.get("/about", MainController.about);
router.get("/ui", MainController.ui);

router.get("/game", authCheck, GameController.index);
router.get("/ranking", authCheck, GameController.ranking);
router.post("/game", authCheck, GameController.save);

router.get("/areas", AreaController.index);

router.get("/cursos", authCheck, CursoController.index);
router.get("/cursos/create", authCheck, CursoController.create);
router.post("/cursos/create", authCheck, CursoController.create);
router.get("/cursos/update/:id", authCheck, CursoController.update);
router.post("/cursos/update/:id", authCheck, CursoController.update);
router.post("/cursos/remove/:id", authCheck, CursoController.remove);
router.get("/cursos/:id", authCheck, CursoController.read);

module.exports = router;
