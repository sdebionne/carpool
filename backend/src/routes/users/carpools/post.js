const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const {promisify} = require('util');
const uuidv4 = require('uuid/v4');
const rk = require('@rk');

const carpoolSchema = require('@schemas/carpool');

module.exports = {
  method: 'POST',
  path: '/carpools',
  options: {
    auth: 'jwt',
    pre: [async (req, h) => {
      if (req.auth.credentials.admin || req.auth.credentials.username === req.params.uid)
        return true;
      else
        throw Boom.forbidden('Invalid credential for this resource!');
    }],
    validate: {
      payload: carpoolSchema,
    },
    description: 'Add a carpool',
    notes: 'Add an carpool to the list',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let user = req.auth.credentials;

    // Generate unique key
    let uid = uuidv4();
    let key = rk('carpools', uid);
    let carpool = req.payload;

    try {
      let multi = redis.multi();
      multi.execAsync = promisify(multi.exec).bind(multi);

      await multi.hset(key, 'name', carpool.name, 'description', carpool.description, 'origin', carpool.origin, 'destination', carpool.destination)
        .sadd(rk('users', user.username, 'carpools'), key)
        .execAsync();

      return h.response({ uid }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
