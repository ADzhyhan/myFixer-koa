/* eslint-disable linebreak-style */
const Joi = require('joi');

const userSchema = Joi.object({
  fname: Joi.string().min(3).required(),
  lname: Joi.string().min(3).required(),
  active: Joi.bool().required(),
});

module.exports = {
  userSchema,
};
