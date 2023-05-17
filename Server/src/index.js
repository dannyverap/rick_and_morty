const http = require("http");

const { getCharByID } = require("./controllers/getCharById")

http.createServer((request, response) => {
    
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url.includes("/rickandmorty/character")) {
        let id = request.url.split("/").at(-1);  
        getCharByID(response, Number(id))
    }
}).listen(3001, "localHost");