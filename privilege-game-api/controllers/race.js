// Exportar a função da controller
module.exports = app => {
    // Get
    app.get('/race', (req, res) =>
    {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Endpoint para obter um objeto race.'
        res.send("Get race susccesfully!")
    });

    // Post
    app.post('/race', (req, res) => {
        // #swagger.tags = ['Race']
        // #swagger.description = 'Endpoint para criar um objeto race.'
        console.log(req.body);
        res.send("Post race succesfully")
    });
}