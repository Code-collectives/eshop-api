import { Router } from "express";
import { addAdvert, deleteAdvert, getAdverts, getOneAdvert, updateAdvert } from "../controllers/advert";

//Create a router
const advertRouter = Router();

//Define routes

advertRouter.post('/adverts', addAdvert);

advertRouter.get('/adverts', getAdverts);

advertRouter.get('/adverts/:id', getOneAdvert);

advertRouter.patch('/adverts/:id', updateAdvert);

advertRouter.delete('/adverts/:id', deleteAdvert);


