const express = require('express');
const gameController = require('../controllers/gameController.js');

const router = express.Router();

router.get('/', gameController.getAllGames);
router.post('/', gameController.createGame);
router.get('/:id', gameController.getGameById);
router.put('/:id', gameController.updateGameById);


module.exports = router;
