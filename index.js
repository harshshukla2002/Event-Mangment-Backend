const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join("./db.json"));

const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  try {
    console.log(`json server is running`);
  } catch (error) {
    console.log(error);
  }
});
