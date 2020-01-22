const Joi = require('@hapi/joi');

const carSchema = Joi.object({
    driver: require('./person').description('Driver of the car'),
    nbPassengers: Joi.number().integer().min(1).max(8).required().description('Number of passengers (excluding the driver)'),
}).label('Car');

module.exports = carSchema;
