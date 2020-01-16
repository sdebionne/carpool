const Boom = require('@hapi/boom');

const rk = require('@rk');
const crypto = require('crypto');

const hash = crypto.createHash('md5');

module.exports = {
  method: 'GET',
  path: '/carpools/{uid}',
  options: {
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
      etag = hash.update(value.toString()).digest('hex');

      return h.entity({ etag: etag }).response(value);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
