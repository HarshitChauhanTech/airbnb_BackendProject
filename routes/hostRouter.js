// Core Module

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const { getAddHome, postAddHome } = require('../controllers/homes');

hostRouter.get("/add-home", getAddHome)
hostRouter.post("/add-home",postAddHome)


exports.hostRouter = hostRouter;

