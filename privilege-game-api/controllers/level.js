
const Level = require('../models/level')

// Export the controller's functions
module.exports = app => {
    // Get
    app.get('/level/:id', (req, res) => {
        // #swagger.tags = ['Level']
        // #swagger.description = 'Gets an existing level.'
        // #swagger.parameters['id'] = { description: 'Level\'s id.' }
        l = Level.getLevel(req.params.id);
        res.send(l);
    });

    // Post
    app.post('/level', (req, res) => {
        // #swagger.tags = ['Level']
        // #swagger.description = 'Creates a new player.'
        /* #swagger.parameters['newLevel'] = {
               in: 'body',
               description: 'Level\'s info.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/addLevel" }
        } */

        const level = req.body;
        const l = Level.createLevel(level);

        res.send(l);
    });
}