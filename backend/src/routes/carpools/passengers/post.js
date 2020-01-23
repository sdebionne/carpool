const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const passenger = require('@schemas/person');

module.exports = {
  method: 'POST',
  path: '/carpools/{carpool_uid}/passengers',
  options: {
    auth: false,
    validate: {
      payload: passenger,
      params: Joi.object({
        carpool_uid: Joi.string().guid().description('Carpool UID'),
      }),
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
      let res = await redis.saddAsync(rk('carpools', carpool_uid, 'passengers'), JSON.stringify(passenger));
      let count = await redis.scardAsync(rk('carpools', carpool_uid, 'passengers'));

      return h.response({ count }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
