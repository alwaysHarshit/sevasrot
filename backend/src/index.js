import dotenv from 'dotenv';
import {app} from './app.js';
import {dbConnection} from "./db/dbConnection.js";
dotenv.config({
	path: './.env',
});

await dbConnection().then(() => {
	console.log('Database connected');
	app.listen(process.env.PORT, () => {
		console.log(`Server is running on http://localhost:${process.env.PORT}`);
	});
}).catch((error) => {
	console.error('Database connection error:', error.message);
});
