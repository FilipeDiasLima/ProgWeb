const express = require('express')
const MainController = require('../controllers/main')
const router = express.Router()

router.get('/', MainController.index)
router.get('/about', MainController.about)
router.get('/ui', MainController.ui)
router.get('/game', MainController.game)

module.exports = router
