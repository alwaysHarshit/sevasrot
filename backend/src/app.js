import express from 'express';
import {donationRoutes} from "./route/donation.route.js";
export const app = express();
app.use(express.json());
app.use('/api', donationRoutes);