const openapiToPostman = require('../../openapi-to-postman/index')
const swaggerToPostman = require('../../swagger2-postman2/index')
const ramlToPostman = require('../../raml1-to-postman/index')
const postmanToOpenapi = require('postman-to-openapi')

module.exports = {
  mapping: {
    'openapi3': {
        'postman2': openapiToPostman
    },
    'swagger2': {
        'postman2': swaggerToPostman
    },
    'postman2': {
      'openapi3': null
    },
    'raml1': {
      'postman2': ramlToPostman,
      'openapi3': ['postman2'],
    },
  },
}