const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

const validateFunc = async (decoded, request, h) => {
  
  // do your checks to see if the person is valid
  return {
    isValid: true,
    credentials: decoded,
  };
};

// function authenticate (request, reply) {
//   db.get(request.payload.email, function(err, res) { // GENERIC DB request. insert your own here!
//     if(err) {
//       reply('fail').code(400); // don't leak info about user existence
//     }
//     Bcrypt.compare(request.payload.password, user.password, function (err, isValid) {
//         if(!err && isValid) {
//           reply('great success'); // or what ever you want to rply
//         } else {
//           reply(Boom.notFound('Sorry, that username or password is invalid, please try again.'));
//         } // see: https://github.com/dwyl/hapi-login/issues/14
//     }); // END Bcrypt.compare which checks the password is correct
//   }); // END db.get which checks if the person is in our database
// }

module.exports = async (serverOptions, options) => {
  const server = new Hapi.server(
    Object.assign({
      port: 3001,
      host: 'localhost',
      routes: {
        cors: {
          origin: ['*'],
        },
      },
      debug: { request: ['error'] },
    }, serverOptions),
  );

  // Redirect to SSL
  if (options.enableSSL) {
    console.log('Setting SSL');
    await server.register({plugin: require('hapi-require-https')});
  } else {
    console.log('Not setting SSL');
  }
  
  await server.register([
    require('@hapi/vision'),
    require('@hapi/inert'),
    {
      plugin: require('@hapi/good'),
      options: {
        ops: {
          interval: 1000,
        },
        reporters: {
          consoleReporter: [
            {
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{response: '*'}],
            },
            {
              module: '@hapi/good-console',
            },
            'stdout',
          ],
        },
      },
    },
    {
      plugin: HapiSwagger,
      options: {
        basePath: '/api/v1',
        info: {
          title: 'Carpool API Documentation',
          version: Pack.version,
        },
      },
    },
  ]);

  await server.register(require('hapi-auth-jwt2'));

  server.auth.strategy('jwt', 'jwt', {
    key: require('./config'),
    verifyOptions: { algorithms: ['HS256'] },
    validate: validateFunc,
  });

  server.auth.default('jwt');

  const api = require('./api');  
  await server.register(
    api,
    {
      routes: {
        prefix: '/api/v1',
      }
    }
  );

  return server;
};
