// Core Modules

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const { getHomes, getBookings } = require('../controllers/storeController');

storeRouter.get("/",getHomes);
storeRouter.get("/bookings", getBookings);

module.exports = storeRouter;