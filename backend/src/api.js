const routes = [

  './routes/index',
  './routes/users/signin',
  './routes/users/signup',
  './routes/users/get',
  './routes/carpools/get',
  './routes/carpools/get_one',
  './routes/carpools/post',
  './routes/carpools/delete',

].map((elem) => require(elem));

const api = {
  name: 'api',
  version: '1.0.0',
  register: async function (server, options) {
    server.route(routes);
  },
};

module.exports = api;
