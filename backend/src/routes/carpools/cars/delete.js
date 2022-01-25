const Joi = require('joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const car = require('@schemas/car');

module.exports = {
  method: 'DELETE',
  path: '/carpools/{carpool_uid}/cars',
  options: {
    auth: false,
    validate: {
      payload: car,
      params: Joi.object({
        carpool_uid: Joi.string().guid().description('Carpool UID'),
      }),
    },
    description: 'Remove a car from the carpool',
    notes: 'Remove a car from the carpool',
    tags: ['api'],
  },
  handler: async (request, h) => {
    let {redis} = request.server.app;
    let car = request.payload;
    let {carpool_uid} = request.params;

    try {
      let res = await redis.sremAsync(rk('carpools', carpool_uid, 'cars'), JSON.stringify(car));
      let count = await redis.scardAsync(rk('carpools', carpool_uid, 'cars'));

      return h.response({ count }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
