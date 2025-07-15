// Core Modules

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const {getHomesDetails, getHomes, getBookings, getFavouriteList,getIndex,postaddToFavourite,postRemoveFromFavourite } = require('../controllers/storeController');

storeRouter.get("/homes",getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/", getIndex);
storeRouter.get("/favourites", getFavouriteList);
storeRouter.get("/homes/:homeId",getHomesDetails)
storeRouter.post("/favourites", postaddToFavourite)
storeRouter.post("/favourites/delete/:homeId",postRemoveFromFavourite)

module.exports = storeRouter;