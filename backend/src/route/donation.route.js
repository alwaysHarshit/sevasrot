import {Router} from "express";
import {donate} from "../controllers/donation.controller.js";

export const donationRoutes = Router();

donationRoutes.route('/donate').post(donate);
