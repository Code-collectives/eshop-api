import { Router } from "express";
import { addAdvert, countAdverts, deleteAdvert, getAdverts, getOneAdvert, updateAdvert } from "../controllers/advert.js";

//Create a router
const advertRouter = Router();

//Define routes

advertRouter.post('/adverts', addAdvert);

advertRouter.get('/adverts', getAdverts);

advertRouter.get('/adverts/:id', getOneAdvert);

advertRouter.patch('/adverts/:id', updateAdvert);

advertRouter.delete('/adverts/:id', deleteAdvert);

advertRouter.get('/adverts/count', countAdverts)



//Export Router
export default advertRouter;


