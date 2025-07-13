// Core Modules

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const { getHomes, getBookings, getFavouriteList,getIndex } = require('../controllers/storeController');

storeRouter.get("/homes",getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/", getIndex);
storeRouter.get("/favorites", getFavouriteList);


module.exports = storeRouter;