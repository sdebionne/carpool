const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const uuidv4 = require('uuid/v4');
const rk = require('@rk')

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
  handler: async (request, h) => {
    let {redis} = request.server.app;
    let user = request.auth.credentials;
    
    // Generate unique key
    let uid = uuidv4();
    let key = rk('carpools', user.username, uid);
    let carpool = request.payload;

    try {


      await redis.hsetAsync(key, 'name', carpool.name, 'description', carpool.description, 'origin', carpool.origin, 'destination', carpool.destination);
      return h.response({ uid }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
