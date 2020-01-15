const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

module.exports = {
  method: 'DELETE',
  path: '/carpools/{uid}',
  options: {
    auth: 'jwt',
    validate: {
      payload: Joi.object({
        index: Joi.number().min(0).required().note('Index to delete'),
      }),
    },
    description: 'Delete item',
    notes: 'Delete an item from the todo list',
    tags: ['api'],
  },
  handler: async (req, h) => {
    let {redis} = req.server.app;
    let {uid} = req.params;
    let {index: redisindex} = req.payload;    

    try {
      await redis.lsetAsync(uid, redisindex, '__DELETE__');
      await redis.lremAsync(uid, 1, '__DELETE__');

      return h.response({}).code(200);
    } catch (e) {
      return Boom.badImplementation(e);
    }
  }
};
