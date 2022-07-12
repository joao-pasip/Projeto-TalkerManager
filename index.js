const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const { router } = require('./routes/index_routes');
const swaggerFile = require('./swagger_output.json');

const app = express();
app.use(bodyParser.json());
app.use(router);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
