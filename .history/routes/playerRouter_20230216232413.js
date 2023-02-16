const express = require('express');
var routes = express.Router();
const playerController = require('../controllers/playerController')
const playersRouter = express.Router();

playersRouter.route('/')
    .get(playerController.index)
    .post(playerController.create);
module.exports = playersRouter;

