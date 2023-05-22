const express = require("express");

let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character)
    res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) 

    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}