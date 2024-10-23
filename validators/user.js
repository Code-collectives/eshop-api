import Joi from "joi";

export const register = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().unique(),
    password: Joi.number().strict().required(),
    role: Joi.string().required(),
   

});

export const signIn = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().unique(),
    password: Joi.number().strict().required(),
    role: Joi.string().required(),
   

});