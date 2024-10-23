import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string(),
    role: Joi.string().valid('user', 'vendor'),
   

});

export const signInUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()

});