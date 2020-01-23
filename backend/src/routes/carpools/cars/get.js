const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const car = require('@schemas/car');

module.exports = {
  method: 'GET',
  path: '/carpools/{carpool_uid}/cars',
  options: {
    auth: false,
    description: 'Get cars list',
    notes: 'Get cars list',
    tags: ['api'],
    validate: {
      params: Joi.object({
        carpool_uid: Joi.string().guid().description('Carpool UID'),
      }),
    },
    response: {
      schema: Joi.array().items(car),
      failAction: 'log',
    },
  },
  handler: async (request, h) => {
    let {redis} = request.server.app;
    let {carpool_uid} = request.params;

    try {
      let value = await redis.sscanAsync(rk('carpools', carpool_uid, 'cars'), '0');

      let cursor = value[0];
      let cars = value[1].map((obj) => { return JSON.parse(obj);});

      return h.response({ cars }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
