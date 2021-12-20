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

    app.get('/players', async(req, res) => {
       const players = await Player.getAllPlayers();
       res.send(players);
    });

    // Post
    app.post('/player', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Creates a new player.'
        /* #swagger.parameters['newPlayer'] = {
               in: 'body',
               description: 'Player\'s info.',
               required: true,
               type: 'Player',
               schema: { $ref: "#/definitions/addPlayer" }
        } */

        const player = req.body;
        const p = await Player.insertPlayer(player);

        res.send(p)
    });

    // Put
    app.put('/player/:id', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Updates an existing player by id.'
        /* #swagger.parameters['score'] = {
               in: 'body',
               description: 'Player\'s score.',
               required: true,
               type: 'Player',
               schema: { $ref: "#/definitions/updateScore" }
        } */
        const document = req.body;
        const id = req.params.id;
        const p = await Player.updatePlayer(id, document.player);

        res.send(p);
    });

    // Delete
    app.delete('/player/:id', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Deletes an existing player by id.'
        const id = req.params.id;
        const p = await Player.deletePlayer(id);
        res.send(p);
    });
}