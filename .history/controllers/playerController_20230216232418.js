const Players = require('../models/player')
class PlayerController {
    index(req, res, next) {
        Players.find({})
            .then((players) => {
                res.render('player', {
                    title: 'The list of Players',
                    players: players
                });
            }).catch(next);
    }

    create(req, res, next) {
        const player = new Players(req.body);
        player.save()
            .then(() => res.redirect('/players'))
            .catch(error => { });
    }

}
module.exports = new PlayerController;
