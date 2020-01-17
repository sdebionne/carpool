const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');

module.exports = {
  method: 'POST',
  path: '/carpools/{carpool_uid}/passengers',
  options: {
    validate: {
      payload: {
        firstname: Joi.string().required().notes('Firstname'),
        lastname: Joi.string().required().notes('Lastname'),
      },
    },
    description: 'Add a passenger to the waiting list',
    notes: 'Add a passenger to the waiting list',
    tags: ['api'],
  },
  handler: async (request, h) => {
    let {redis} = request.server.app;
    let passenger = request.payload;
    let {carpool_uid} = request.params;

    try {
      let count = await redis.saddAsync(rk('carpools', carpool_uid, 'passengers'), JSON.stringify(passenger));

      return h.response({ count }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
