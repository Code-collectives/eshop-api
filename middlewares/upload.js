import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";


export const AdvertImage = multer ({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.
    })
})