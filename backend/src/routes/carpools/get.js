const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const rk = require('@rk');
const _ = require('lodash');

module.exports = {
  method: 'GET',
  path: '/carpools',
  options: {
    auth: 'jwt',
    validate: {
      query: Joi.object({
        start: Joi.number().min(0).default(0).note('Start index of results inclusive'),
        count: Joi.number().min(1).max(100).default(10).note('Number of results to return'),
      }),
    },
    description: 'Get items',
    notes: 'Get items from todo list paged',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let user = req.auth.credentials;
    let {start, count} = req.query;
    
    const key = rk('users', user.username, 'carpools');

    try {
      
      let value = await redis.sortAsync(key, 'BY', 'nosort', 'GET', '#', 'GET', '*->name', 'LIMIT', start, count);

      if (!value) value = [];
      else value = _(value).chunk(2).map((array) => { return {uid: array[0], name: array[1]}; });
      
      let cursor = 0;

      return h.response({
        nextlink: `${req.url.pathname}?start=${start + count}&results=${count}`,
        value,
        count
      });
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
