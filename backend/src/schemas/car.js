const Joi = require('joi');

const carSchema = Joi.object({
    driver: require('./driver').required(),
    nbPassengers: Joi.number().integer().min(1).max(8).required().description('Number of passengers (excluding the driver)'),
}).label('Car');

module.exports = carSchema;
