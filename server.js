const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;
const ip = "0.0.0.0";

server.use(middlewares);
server.use(router);

server.listen(port, ip);