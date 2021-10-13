const appController = require('express').Router();
const { checkRequiredFields, checkRequiredHeaders, checkRequiredQueries } = require('../MiddleWares/MiddleWares');
const AppServices = require('./app.service');


appController.get('/monitors', AppServices.fetchListofMonitor)
appController.post('/monitors-brightness/:level/:screen', AppServices.changeBrightnessLevel)


module.exports = appController;