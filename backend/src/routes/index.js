module.exports = {
  method: 'GET',
  path: '/',
  config: { auth: false },
  handler: async (request, h) => {
    return 'Hello World!';
  }
};
