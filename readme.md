# Sevasrot Backend - Node.js & Express

Welcome to the backend of **Sevasrot**! This project is built using **Node.js** and **Express** to power the backend API. Follow the steps below to quickly get started.

## Installation

Follow these easy steps to get everything up and running.

1. **Clone the repository**:

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/alwaysHarshit/sevasrot.git
   cd sevasrot/backend
   npm i Express Mongoose Dotenv Nodemon Cors
    ```

## project structure
  ```bash
    backend/
    ├── src              # Application source code
    ├── package.json     # Dependencies and scripts
    ├── .env             # Environment variables (to be created)
  ```
## project steup
1.Create a .env file in the root of the project and add the following environment variables:

```bash
PORT=3000 OR <CUSTUM DEFINED PORT>
MONGO_URI=<MONGO_URI>
MONGO_DB=<DATABASE_NAME>
```
### Start the server
```bash
cd backend
npm start
```