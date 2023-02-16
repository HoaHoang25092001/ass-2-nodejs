const express = require('express');
var routes = express.Router();
const playerController = require('../controllers/playerController')
const playersRouter = express.Router();

playersRouter.route('/')
    .get(playerController.index)
    .post(playerController.create);
playersRouter.route('/delete/:playerId')
    .get(playerController.delete)
playersRouter.route('edit/:playerId')
    .get(playerController.formEdit)
    .put(playerController.edit)
module.exports = playersRouter;

