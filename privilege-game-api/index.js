const customExpress = require('./config/customExpress');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const app = customExpress();

http.createServer(app).listen(3000)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

console.log("Listening at:// port:%s (HTTP)", 3000)
