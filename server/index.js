const customExpress = require('./config/customExpress');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const cors = require('cors');
const app = customExpress();

http.createServer(app).listen(4000)
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

console.log("Listening at:// port:%s (HTTP)", 4000)
