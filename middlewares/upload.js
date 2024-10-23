import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";


export const AdvertMedia = multer ({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: "/advert-app/*"
    }),
    preservePath: true
});

