const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const {promisify} = require('util');
const uuidv4 = require('uuid/v4');
const rk = require('@rk');

const createCarpoolSchema = require('./schemas/createCarpool');

module.exports = {
  method: 'POST',
  path: '/carpools',
  options: {
    auth: 'jwt',
    validate: {
      payload: createCarpoolSchema,
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
