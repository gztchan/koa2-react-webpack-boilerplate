const router = require('koa-router')();

const { main } = require('./controller');

module.exports = (app) => {
  router.get('/', main);

  app
    .use(router.routes())
    .use(router.allowedMethods());
};
