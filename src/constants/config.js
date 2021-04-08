const openapiToPostman = require('../../openapi-to-postman/index')
const swaggerToPostman = require('../../swagger2-postman2/index')

module.exports = {
  mapping: {
    'openapi3': {
        'postman2': openapiToPostman
    },
    'swagger2': {
        'postman2': swaggerToPostman
    },
  }
}