const customExpress = require('./config/customExpress');
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const app = customExpress();

http.createServer(app).listen(80)
console.log("Listening at:// port:%s (HTTP)", 80)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

