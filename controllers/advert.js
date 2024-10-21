import { AdvertModel } from "../models/advert.js";
import { addAdvertValidator, updateAdvertValidator } from "../validators/advert.js";


export const getAdverts = async (req, res, next) => {

    try {
        const adverts = await AdvertModel.find(req.body);

        res.status(200).json(adverts);
    } catch (error) {
        next(error)

    }
}



export const getOneAdvert = async (req, res, next) => {
    try {
        const advert = await AdvertModel.findById(req.params.id);

        res.status(200).json(advert)
    } catch (error) {
        next(error)

    }
}



export const addAdvert = async (req, res, next) => {

    try {
        // Validate user input
        const { error, value } = addAdvertValidator.validate(req.body)

        if (error) {
            return res.status(422).json(error)
        }


        // Create the new advert using the request body
        const newAdvert = await AdvertModel.create(req.body);

        // Return a success response with the created advert object 
        res.status(201).json({
            message: `Your Ad "${newAdvert.title}" was created successfully!`,
            advert: newAdvert
        });


        // Pass the error to the error-handling middleware
    } catch (error) {
        next(error);

    }
}



export const updateAdvert = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = updateAdvertValidator.validate(req.body)

        if (error) {
            return res.status(422).json(error);
        }


        // // Find the advert by its ID and update it with the provided values, returning the updated document
        const revisedAdvert = await AdvertModel.findByIdAndUpdate(req.params.id, value, { new: true });

        // Return a success response with the updated advert object 
        res.status(200).json({
            message: `Your Ad "${revisedAdvert.title}" was updated successfully!`,
            advert: revisedAdvert
        });


        // Pass the error to the error-handling middleware
    } catch (error) {
        next(error);
    }

}



export const deleteAdvert = async (req, res, next) => {


    try {
        // Find and delete the advert by its ID
       await  AdvertModel.findByIdAndDelete(req.params.id);

       // Respond with a success message after deletion
        res.status(200).json('Ad was deleted!');
    } catch (error) {
        next(error)

    }
}