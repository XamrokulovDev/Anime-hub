const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Anime Hub',
    version: '1.0.0',
    description: 'Node.js bilan yaratilgan Savdo-Sotiq API',
  },
  servers: [
    {
      url: 'http://localhost:3030',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./Routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;