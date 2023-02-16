const Players = require('../models/player')
class PlayerController {
    index(req, res, next) {
        Players.find({})
            .then((players) => {
                res.render('players', {
                    title: 'The list of Players',
                    players: players
                });
            }).catch(next);
    }
}
module.exports = new PlayerController;
