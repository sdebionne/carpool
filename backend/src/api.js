const routes = [

  './routes/index',
  './routes/users/signin',
  './routes/users/signup',
  './routes/users/get',
  './routes/users/carpools/get',
  './routes/users/carpools/post',
  './routes/users/carpools/delete',
  './routes/carpools/get',
  './routes/carpools/put',
  './routes/carpools/passengers/get',
  './routes/carpools/passengers/post',
  './routes/carpools/passengers/delete',
  './routes/carpools/cars/get',
  './routes/carpools/cars/post',
  './routes/carpools/cars/delete',

].map((elem) => require(elem));

const api = {
  name: 'api',
  version: '1.0.0',
  register: async function (server, options) {
    server.route(routes);
  },
};

module.exports = api;
