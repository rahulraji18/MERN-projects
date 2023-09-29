var swaggerJSDoc = require('swagger-jsdoc');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

let schema = ['http','https']

// swagger definition
var swaggerDefinition = {
    info: {
        title: '2Stay : API Documentation',
        version: '1.0',
        contact: 'admin@gmail.com',
        description: 'There are the api documentation for the 2stay booking system',

    },
    host: `localhost:5006`,
    basePath: '/',
    schemes: [
        ...schema
    ],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    }

};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [
        // './controllers/user/index.js',
    ]
};
// initialize swagger-jsdoc
const swaggerJson = swaggerJSDoc(options);
fs.writeFileAsync('./public/swagger.json', JSON.stringify(swaggerJson, null, 2))
    .then(function (rs) { })
    .catch(function (err) {
        console.log(err);
    });
module.exports = swaggerJson;