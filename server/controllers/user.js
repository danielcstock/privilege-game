const User = require('../models/user');

module.exports = app => {
    // Get
    app.get('/users/:username', async (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Gets an existing User.'
        // #swagger.parameters['username'] = { description: 'User\'s name.' }
        const u = await User.getUserByUsername(req.params.username);
        res.send(u);
    });
}
