'use strict';

const bcrypt = require('bcrypt');
const {promisify} = require('util');
const rk = require('@rk');

const Boom = require('@hapi/boom');

const {createToken} = require('./common');
const createUserSchema = require('@schemas/createUser');

async function verifyUniqueUser(req, h) {
  let {redis} = req.server.app;
  
  console.log(redis.existsAsync);
  
  try {
    // Find an entry from the database that matches the username
    let exists = await redis.existsAsync('users:' + req.payload.username);

    // Check whether the username or email
    // is already taken and error out if so
    if (exists) {
        throw Boom.badRequest('Username taken');
    }
    // If everything checks out, send the payload through
    // to the route handler
    //return h.response(req.payload);
    return req.payload;
  } catch (e) {
    return Boom.badImplementation(e);
  }
}

function hashPassword(password, cb) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
}

const hashPasswordAsync = promisify(hashPassword);

module.exports = {
  method: 'POST',
  path: '/signup',
  options: {
    auth: false,
    // Before the route handler runs, verify that the user is unique
    pre: [
      { method: verifyUniqueUser }
    ],
    handler: async (req, h) => {
      let {redis} = req.server.app;

      let user = {};
      user.email = req.payload.email;
      user.username = req.payload.username;
      user.admin = false;
      
      try {
        user.password = await hashPasswordAsync(req.payload.password);
        
        let key = rk('users', user.username);

        let multi = redis.multi();
        multi.execAsync = promisify(multi.exec).bind(multi);

        await multi.hset(key, 'email', user.email, 'username', user.username, 'password', user.password, 'admin', user.admin)
          .sadd(rk('indexes', 'users'), key)
          .execAsync();

        // If the user is saved successfully, issue a JWT
        return h.response({ id_token: createToken(user) }).code(201);
      }
      catch(e) {
        throw Boom.badRequest(e);
      }
    },
    // Validate the payload against the Joi schema
    validate: {
      payload: createUserSchema
    },
    description: 'Add a user',
    notes: 'Signup a new user',
    tags: ['api'],
  }
}
