// Core Modules

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const {getHomesDetails, getHomes, getBookings, getFavouriteList,getIndex,postAddToFavourite } = require('../controllers/storeController');

storeRouter.get("/homes",getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/", getIndex);
storeRouter.get("/favorites", getFavouriteList);
storeRouter.get("/homes/:homeId",getHomesDetails)
storeRouter.post("/favourites", postAddToFavourite)

module.exports = storeRouter;