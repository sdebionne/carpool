const {promisify} = require('util');

module.exports = (redisClient) => {
  // Keys
  redisClient.existsAsync = promisify(redisClient.exists).bind(redisClient);
  redisClient.scanAsync = promisify(redisClient.scan).bind(redisClient);

  // Lists
  redisClient.lpushAsync = promisify(redisClient.lpush).bind(redisClient);
  redisClient.lrangeAsync = promisify(redisClient.lrange).bind(redisClient);
  redisClient.llenAsync = promisify(redisClient.llen).bind(redisClient);
  redisClient.lremAsync = promisify(redisClient.lrem).bind(redisClient);
  redisClient.lsetAsync = promisify(redisClient.lset).bind(redisClient);
  
  // Sets
  redisClient.saddAsync = promisify(redisClient.sadd).bind(redisClient);
  redisClient.sremAsync = promisify(redisClient.srem).bind(redisClient);
  redisClient.scardAsync = promisify(redisClient.scard).bind(redisClient);
  redisClient.sscanAsync = promisify(redisClient.sscan).bind(redisClient);

  // Hashes
  redisClient.hsetAsync = promisify(redisClient.hset).bind(redisClient);
  redisClient.hgetallAsync = promisify(redisClient.hgetall).bind(redisClient);
  
  // Sort
  redisClient.sortAsync = promisify(redisClient.sort).bind(redisClient);
}
