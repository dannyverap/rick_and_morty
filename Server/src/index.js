const http = require("http");
const characters = require("./utils/data")

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); //con esta linea decimos que le damos permiso total a todo, profundizaremos más adelante en el M4
    if (request.url.includes("/rickandmorty/character")) { //aca vemos si el url incluye la info solicitada
        let id = request.url.split("/").at(-1); //en caso sí incluya vamos a separar por el / y devuelve un array, nosotros vamos a buscar el ultimo para tener el ID. Ponemos en Number para que sean iguales

        // una vez que tenemos el id hacemos un filtro de characters que sale del archivo data.js
        //! con el +id lo convertimos a numero que es igual a decir Number(id)   
        let characterFound = characters.find((character) => character.id === +id)


        if (characterFound) {
            //! aca enviamos la respuesta convertida a formato json
            return response //ponemos un return para que se detenga la ejecución
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(characterFound))
        } else {
            return response
                .writeHead(404, { "Content-type": "application/json" })
                .end(JSON.stringify({ error: "Character not found" }));
        }
    }
}).listen(3001, "localHost");