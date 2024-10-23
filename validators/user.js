import Joi from "joi";

export const registerUser = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().unique(),
    password: Joi.number().strict().required(),
    role: Joi.string().required(),
   

});

export const loginUser = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().unique(),
    password: Joi.number().strict().required(),
    role: Joi.string().required(),
   

});