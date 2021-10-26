const Race = require("../models/race");
const Player = require("../models/player");

module.exports = app => {
    // Get
    app.get('/race/:id', (req, res) =>
    {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Get an existing race.'
        r = Race.getRace(req.params.id);
        res.send(r);
    });

    // Post
    app.post('/race', (req, res) => {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Creates a new race.'
        /* #swagger.parameters['newRace'] = {
               in: 'body',
               description: 'Race\'s info.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/addRace" }
        } */
        const race = req.body;
        const r = Race.createRace(race);

        res.send(r);
    });
}