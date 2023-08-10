const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();
const data = JSON.parse(fs.readFileSync(path.join("./db.json")));
const router = jsonServer.router(data);

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
