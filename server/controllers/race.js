const Race = require("../models/race");
const Player = require("../models/player");

module.exports = app => {
    // Get
    app.get('/race/:id', async (req, res) =>
    {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Get an existing race.'
        r = await Race.getRaceById(req.params.id);
        res.send(r);
    });

    // Post
    app.post('/race', async (req, res) => {
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
        const r = await Race.insertRace(race);

        res.send(r);
    });

    // Put
    app.put('/race/:id', async (req, res) => {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Updates an existing race by id.'
        /* #swagger.parameters['race'] = {
               in: 'body',
               description: 'Race\'s info.',
               required: true,
               type: 'Race',
               schema: { $ref: "#/definitions/updateRace" }
        } */
        const document = req.body;
        const id = req.params.id;
        const p = await Race.updateRace(id, document);

        res.send(p);
    });

    // Delete
    app.delete('/race/:id', async (req, res) => {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Deletes an existing race by id.'
        const id = req.params.id;
        const p = await Race.deleteRace(id);
        res.send(p);
    });
}