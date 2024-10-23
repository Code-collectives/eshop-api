import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().unique(),
    password: Joi.number().strict().required(),
    role: Joi.string().required(),
   

});

export const signInUserValidator = Joi.object({
    email: Joi.string().required().unique(),
    password: Joi.number().strict().required()

});