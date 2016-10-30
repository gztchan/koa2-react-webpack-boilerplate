const Koa = require('koa');
const router = require('./router');
const Pug = require('koa-pug');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');

// init
const app = new Koa();
const pug = new Pug({
  viewPath: './view',
  debug: true,
});

const serve = require('koa-static');

// middleware applied
router(app);
pug.use(app);
app.use(serve('./public'));
app.use(cors());
app.use(bodyParser());
