const Race = require("../models/race");

module.exports = app => {
    // Get
    app.get('/sessions/:id', async (req, res) =>
    {
        // #swagger.tags = ['Session']
        // #swagger.description = 'Get an existing race.'
        const r = await Race.getRaceById(req.params.id);
        res.send(r.race);
    });

    app.get('/sessions', async(req, res) =>
    {
        // #swagger.tags = ['Session']
        // #swagger.description = 'Get all races.'
        const races = await Race.getAllRaces();
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('Content-Type', 'application/json');
        res.set('X-Total-Count', races.length);
        res.send(races);
    });

    // Put
    app.put('/sessions/:id', async (req, res) => {
        // #swagger.tags = ['Session']
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
}