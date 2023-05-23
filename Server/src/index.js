const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan = require("morgan")


server.use(express.json());
server.use(morgan("dev")) // sirve para ver en consola las request


server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use("/rickandmorty/", router); //cuando te hagan una petición a rickandmorty andas a buscar al router

server.listen(PORT, () => console.log(`server raised in port: ${PORT}`))
