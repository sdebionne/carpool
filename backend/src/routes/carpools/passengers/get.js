const Joi = require('joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const passenger = require('@schemas/person');

module.exports = {
  method: 'GET',
  path: '/carpools/{carpool_uid}/passengers',
  options: {
    auth: false,
    description: 'Get passenger waiting list',
    notes: 'Get passenger waiting list',
    tags: ['api'],
    validate: {
      params: Joi.object({
        carpool_uid: Joi.string().guid().description('Carpool UID'),
      }),
    },
    response: {
      schema: Joi.array().items(passenger),
      failAction: 'log',
    },
  },
  handler: async (request, h) => {
    let {redis} = request.server.app;
    let {carpool_uid} = request.params;

    try {
      let value = await redis.sscanAsync(rk('carpools', carpool_uid, 'passengers'), '0');

      let cursor = value[0];
      let passengers = value[1].map((obj) => { return JSON.parse(obj);});

      return h.response({ passengers }).code(201);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
