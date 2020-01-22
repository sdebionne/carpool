require('module-alias/register')
require('node-env-file')(`${__dirname}/.env`);

const redis = require('redis');
const redisPromisify = require('./src/redis');

const createServer = require('./src/server');

const start = async () => {
  const server = await createServer(
    {
      port: process.env.PORT,
      host: process.env.HOST,
    },
    {
      enableSSL: process.env.SSL === 'true',
    }
  );

  const redisClient = redis.createClient(
    {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }
  );
  
  redisPromisify(redisClient);

  redisClient.on("error", function (err) {
    console.error("Redis error.", err);
  });

  server.app.redis = redisClient;

  await server.start();
  return server;
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

start()
  .then(server => {
    console.log(`Server listening on ${server.info.uri}/api/v1`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
