
const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const router = require("express").Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);


// //! También se puede hacer de la siguiente forma:
// router.post("/fav", (req, res) => {
//     postFav(req, res);
// })

// router.delete("/fav/:id", (req, res) => {
//     deleteFav(req, res);
// })

module.exports = router;

