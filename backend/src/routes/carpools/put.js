const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');

const carpoolSchema = require('@schemas/carpool');

module.exports = {
  method: 'PUT',
  path: '/carpools/{uid}',
  options: {
    validate: {
      payload: carpoolSchema,
    },
    description: 'Modify a carpool',
    notes: 'Modify a carpool',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let {uid} = req.params;
    //let user = req.auth.credentials;

    const key = rk('carpools', uid);

    try {

      let value = await redis.hsetAsync(key);

      return h.response(value);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
