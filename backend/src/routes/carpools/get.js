const Joi = require('joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
var hash = require('object-hash');

module.exports = {
  method: 'GET',
  path: '/carpools/{uid}',
  options: {
    auth: false,
    description: 'Get carpool',
    notes: 'Get one carpool',
    tags: ['api'],
    validate: {
      params: Joi.object({
        uid: Joi.string().guid().description('Carpool UID'),
      }),
    },
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let {uid} = req.params;
    //let user = req.auth.credentials;
    
    const key = rk('carpools', uid);

    try {
      
      let value = await redis.hgetallAsync(key);

      let etag = hash.MD5(value);
      h.entity({ etag: etag });
      
      return h.response(value);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
