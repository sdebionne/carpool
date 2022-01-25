const Joi = require('joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const car = require('@schemas/car');

module.exports = {
  method: 'PATCH',
  path: '/carpools/{carpool_uid}/cars',
  options: {
    auth: false,
    validate: {
      payload: Joi.object({
        nbPassengers: Joi.number().integer().min(1).max(8).required().description('Number of passengers (excluding the driver)'),
      }),
      params: Joi.object({
        carpool_uid: Joi.string().guid().description('Carpool UID'),
      }),
    },
    description: 'Patch a car a of the carpool',
    notes: 'Add a car to the carpool',
    tags: ['api'],
  },
  handler: async (request, h) => {
    let {redis} = request.server.app;
    let car = request.payload;
    let {carpool_uid} = request.params;

    try {
      // TODO: Use multi
      let res = await redis.saddAsync(rk('carpools', carpool_uid, 'cars'), JSON.stringify(car));
      let count = await redis.scardAsync(rk('carpools', carpool_uid, 'cars'));

      return h.response({ count }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
