const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

module.exports = {
  method: 'GET',
  path: '/users',
  options: {
    // Add authentication to this route
    // The user must have a scope of `admin`
    auth: {
      strategy: 'jwt',
      scope: ['admin'],
    },
    validate: {
      query: Joi.object({
        start: Joi.number().min(0).default(0).note('Start index of results inclusive'),
        count: Joi.number().min(1).max(100).default(10).note('Number of results to return'),
      }),
    },
    description: 'Get users',
    notes: 'Get users from carpool site',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let {start, count} = req.query;

    try {
      let value = await redis.scanAsync(start, "MATCH", "users:*", "COUNT", count);
      let cursor = value[0];
      let users = value[1];

      if (cursor == 0) count = 0;

      return h.response({
        nextlink: `${req.url.pathname}?start=${cursor}&count=${count}`,
        users,
      });
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
