import { Router } from "express";
import { addAdvert, countAdverts, deleteAdvert, getAdverts, getOneAdvert, updateAdvert } from "../controllers/advert.js";
import { AdvertMedia } from "../middlewares/upload.js";
import { isAuthenticated, hasPermission } from "../middlewares/auth.js";

//Create a router
const advertRouter = Router();

//Define routes

advertRouter.post('/adverts', isAuthenticated, hasPermission('post_adverts'), AdvertMedia.single('media'),  addAdvert);

advertRouter.get('/adverts', getAdverts);

advertRouter.get('/adverts/:id', getOneAdvert);

advertRouter.patch('/adverts/:id', updateAdvert);

advertRouter.delete('/adverts/:id', deleteAdvert);

advertRouter.get('/adverts/count', countAdverts)



//Export Router
export default advertRouter;


