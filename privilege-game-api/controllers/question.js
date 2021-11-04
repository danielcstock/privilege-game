
const Question = require('../models/question')

// Export the controller's functions
module.exports = app => {
    // Get
    app.get('/question/:id', (req, res) => {
        // #swagger.tags = ['Question']
        // #swagger.description = 'Gets an existing question.'
        // #swagger.parameters['id'] = { description: 'Question\'s id.' }
        q = Question.getQuestion(req.params.id);
        res.send(q);
    });

    // Post
    app.post('/question', (req, res) => {
        // #swagger.tags = ['Question']
        // #swagger.description = 'Creates a new question.'
        /* #swagger.parameters['newQuestion'] = {
               in: 'body',
               description: 'Question\'s info.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/addQuestion" }
        } */

        const question = req.body;
        const q = Question.createQuestion(question);

        res.send(q);
    });
}