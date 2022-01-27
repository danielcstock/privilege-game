const Player = require('../models/player')

module.exports = app => {
    // Get
    app.get('/players', async(req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Get all players.'
        const players = await Player.getAllPlayers();
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('Content-Type', 'application/json');
        res.set('x-total-count', players.length);
        res.send(players);
    });

    app.get('/players/:id', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Gets an existing player.'
        // #swagger.parameters['id'] = { description: 'Player\'s id.' }
        const p = await Player.getPlayerById(req.params.id);
        res.send(p);
    });

    app.get('/players/occupation/:occupation', async(req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Gets players by occupation.'
        // #swagger.parameters['occupation'] = { description: 'Player\'s occupation.' }
        const players = await Player.getPlayersByOccupation(req.params.occupation);
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('Content-Type', 'application/json');
        res.set('x-total-count', players.length);
        res.send(players);
    });

    app.get('/players/skintone/:skin_tone', async(req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Gets players by skin tone.'
        // #swagger.parameters['skin_tone'] = { description: 'Player\'s skin tone.' }
        const players = await Player.getPlayersBySkinTone(req.params.skin_tone);
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('Content-Type', 'application/json');
        res.set('x-total-count', players.length);
        res.send(players);
    });

    // Post
    app.post('/players', async (req, res) => {
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
    app.put('/players/:id', async (req, res) => {
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
    app.delete('/players/:id', async (req, res) => {
        // #swagger.tags = ['Player']
        // #swagger.description = 'Deletes an existing player by id.'
        const id = req.params.id;
        const p = await Player.deletePlayer(id);
        res.send(p);
    });
}