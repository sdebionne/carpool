const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const {promisify} = require('util');

module.exports = {
  method: 'DELETE',
  path: 'users/{user_uid}/carpools/{carpool_uid}',
  options: {
    auth: 'jwt',
    pre: [async (req, h) => {
      if (req.auth.credentials.admin || req.auth.credentials.username === req.params.user_uid)
        return true;
      else
        throw Boom.forbidden('Invalid credential for this resource!');
    }],
    description: 'Delete carpool',
    notes: 'Delete a carpool from the carpool set',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let {user_uid, carpool_uid} = req.params;

    try {
      let multi = redis.multi();
      multi.execAsync = promisify(multi.exec).bind(multi);

      await multi.del(rk('carpools', carpool_uid))
        .srem(rk('users', user_uid, 'carpools'), carpool_uid)
        .execAsync();

      return h.response({}).code(200);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
