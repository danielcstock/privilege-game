
const Player = require('../models/player')

// Exportar a função da controller
module.exports = app => {
    // Get
    app.get('/player', (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Endpoint para obter um usuário.'
        res.send("Get player susccesfully!")
    });

    // Post
    app.post('/player', (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Endpoint para criar um player.'
        const player = req.body;
        Player.createPlayer(player);

        res.send("Post player succesfully")
    });
}