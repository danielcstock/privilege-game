const Race = require("../models/race");

module.exports = app => {
    // Get
    app.get('/races/:id', async (req, res) =>
    {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Get an existing race.'
        const r = await Race.getRaceById(req.params.id);
        res.send(r.race);
    });

    app.get('/races', async(req, res) =>
    {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Get all races.'
        const races = await Race.getAllRaces();
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('Content-Type', 'application/json');
        res.set('X-Total-Count', races.count);
        res.send(races);
    });

    // Post
    app.post('/races', async (req, res) => {
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

        res.send(r.race);
    });

    // Put
    app.put('/races/:id', async (req, res) => {
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

        res.send(p.race);
    });

    // Delete
    app.delete('/races/:id', async (req, res) => {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Deletes an existing race by id.'
        const id = req.params.id;
        const p = await Race.deleteRace(id);
        res.send(p);
    });
}