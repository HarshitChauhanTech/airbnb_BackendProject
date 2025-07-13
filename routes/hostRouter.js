// Core Module

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const { getAddHome, postAddHome, getHostHomes } = require('../controllers/hostController');

hostRouter.get("/add-home", getAddHome)
hostRouter.post("/add-home",postAddHome)
hostRouter.get("/host-home-list",getHostHomes)


exports.hostRouter = hostRouter;

