
const Player = require('../models/player')

// Exportar a função da controller
module.exports = app => {
    // Get
    app.get('/player/:id', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Gets an existing player.'
        // #swagger.parameters['id'] = { description: 'Player\'s id.' }
        const p = await Player.getPlayerById(req.params.id);
        res.send(p);
    });

    // Post
    app.post('/player', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Creates a new player.'
        /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Player\'s info.',
               required: true,
               type: 'Player',
               schema: { $ref: "#/definitions/addPlayer" }
        } */

        const player = req.body;
        const p = await Player.createPlayer(player);

        res.send(p)
    });
}