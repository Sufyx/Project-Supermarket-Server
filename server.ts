/**
 * Super-Market Project
 * Asaf Gilboa
*/


import express, { Request, Response } from "express";
import cors from "cors";
require("dotenv").config();
const mongoose = require('mongoose');
// const productsRoute = require("./routes/productsRoute");
// const usersRoute = require("./routes/usersRoute");
import usersRoute from './routes/usersRoute';
import productsRoute from './routes/productsRoute';

const PORT = process.env.PORT || 7070;
const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());

app.use("/products", productsRoute);
app.use("/users", usersRoute);

mongoose
    .connect(process.env.URI, 
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Database connected`);
        app.listen(PORT, () => {
            console.log(`Listening on: ${PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error(error.stack);
        process.exit(1);
    });


app.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        res.send(" :) ");
    } catch (err) {
        console.log('error at empty request: ', err);
        res.status(500).send(err);
    }
});

