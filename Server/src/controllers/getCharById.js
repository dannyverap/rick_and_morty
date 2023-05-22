const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios")

const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`URL/${id}`)
        .then(resultado => resultado.data)
        .then(data = ({ id, status, name, gender, species, origin, image, status }) => {
            if (id && name) {
                const character = {
                    id,
                    status,
                    name,
                    gender,
                    species,
                    origin,
                    image,
                    status
                }
                res.status(200).json(character)
            }
            return res.status(400).send("Not found")
        })
        .catch(error => res.status(500).send(error.message))
        }


module.exports = {
    getCharById
}