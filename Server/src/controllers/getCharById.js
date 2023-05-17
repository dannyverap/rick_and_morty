const axios = require("axios");

const getCharByID = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        //! then recibe un success hundler que es una callback!
        .then(resultado => resultado.data)
        //! recoordemos que una vez que tenemos la respuesta, no cambia! por eso data es lo mismo que obtenemos del primer then 
        .then(data => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            //! lo de arriba tambien se puede hacer por destructuring. en vez de data {id,name,gender,etc}

            return res
                .writeHead(200, { "content-type": "application/json" })
                .end(JSON.stringify(character))
        })

        .catch(error => {
            return res
                .writeHead(500, { "Content-type": "test/plain" })
                .end(error.message)
        })
}

module.exports = {
    getCharByID
}