const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

module.exports = {
  method: 'GET',
  path: '/carpools',
  options: {
    auth: 'jwt',
    validate: {
      query: Joi.object({
        start: Joi.number().min(0).default(0).note('Start index of results inclusive'),
        results: Joi.number().min(1).max(100).default(10).note('Number of results to return'),
      }),
    },
    description: 'Get items',
    notes: 'Get items from todo list paged',
    tags: ['api'],
  },
  handler: async (request, h) => {
    let {redis} = request.server.app;
    //let {redispath} = request.params.uid;
    let {start, results} = request.query;
    
    const redispath = "carpools";

    try {
      let value = await redis.lrangeAsync(redispath, start, start + (results - 1));
      let count = await redis.llenAsync(redispath);

      if (!value) value = [];

      return h.response({
        nextlink: `${request.url.pathname}?start=${start + results}&results=${results}`,
        value,
        count
      });
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
