const bcrypt = require('bcrypt');
const rk = require('@rk');

const Boom = require('@hapi/boom');

const {createToken} = require('./common');
const authenticateUserSchema = require('./schemas/authenticateUser');

async function verifyCredentials(req, h) {
  let {redis} = req.server.app;

  const password = req.payload.password;
  
  let key = rk('users', req.payload.username);

  // Find an entry from the database that matches username
  let user = await redis.hgetallAsync(key);
  if (user) {
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }
    else {
      throw Boom.badRequest('Incorrect password!');
    }
  } else {
    throw Boom.badRequest('Incorrect username or email!');
  }
}

module.exports = {
  method: 'POST',
  path: '/signin',
  options: {
    auth: false,
    // Check the user's password against the DB
    pre: [
      { method: verifyCredentials, assign: 'user' }
    ],
    handler: (req, h) => {
      // If the user's password is correct, we can issue a token.
      // If it was incorrect, the error will bubble up from the pre method
      return h.response({ id_token: createToken(req.pre.user) }).code(201);
    },
    validate: {
      payload: authenticateUserSchema
    },
    description: 'Authenticate a user',
    notes: 'Returns a JWT',
    tags: ['api'],
  }
}
