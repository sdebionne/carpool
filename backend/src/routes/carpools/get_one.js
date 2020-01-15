const Boom = require('@hapi/boom');

const rk = require('@rk');

module.exports = {
  method: 'GET',
  path: '/carpools/{uid}',
  options: {
    auth: 'jwt',
    description: 'Get carpool',
    notes: 'Get one carpool',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let {uid} = req.params;
    //let user = req.auth.credentials;
    
    const key = rk('carpools', uid);

    try {
      
      let value = await redis.hgetallAsync(key);

      return h.response(value);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
