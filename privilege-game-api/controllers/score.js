const Score = require("../models/score");

module.exports = app => {
    // Get
    app.get('/score/player/:id', (req, res) => {
        // #swagger.tags = ['Score']
        // #swagger.description = 'Get an existing score by a player\'s is'
        s = Score.getScoreByPlayerId(req.params.id);
        res.send(s);
    });

    // Post
    app.post('/score', (req, res) => {
        // #swagger.tags = ['Score']
        // #swagger.description = 'Creates a new score.'
        /* #swagger.parameters['newScore'] = {
               in: 'body',
               description: 'Score\'s info.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/addScore" }
        } */
        const score = req.body;
        const s = Score.createScore(score);
        res.send(s);
    });

    // Put
    app.put('/score', (req, res) => {
       const score = req.body;
       const s = Score.updateScore(score);
       res.send(s);
    });
}