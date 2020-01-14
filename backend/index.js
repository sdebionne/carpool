require('module-alias/register')
require('node-env-file')(`${__dirname}/.env`);

const redis = require('redis');
const {promisify} = require('util');

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

  // Keys
  redisClient.existsAsync = promisify(redisClient.exists).bind(redisClient);
  redisClient.scanAsync = promisify(redisClient.scan).bind(redisClient);

  // Lists
  redisClient.lpushAsync = promisify(redisClient.lpush).bind(redisClient);
  redisClient.lrangeAsync = promisify(redisClient.lrange).bind(redisClient);
  redisClient.llenAsync = promisify(redisClient.llen).bind(redisClient);
  redisClient.lremAsync = promisify(redisClient.lrem).bind(redisClient);
  redisClient.lsetAsync = promisify(redisClient.lset).bind(redisClient);

  // Hashes
  redisClient.hsetAsync = promisify(redisClient.hset).bind(redisClient);
  redisClient.hgetallAsync = promisify(redisClient.hgetall).bind(redisClient);

  redisClient.on("error", function (err) {
    console.error("Redis error.", err);
  });

  server.app.redis = redisClient;

  await server.start();

  console.log(`Server running at: ${server.info.uri}/api/v1`);
  //console.log(`Server docs running at: ${server.info.uri}/docs`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

start();
