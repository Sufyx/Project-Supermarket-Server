/**
 * Super-Market Project
 * Asaf Gilboa
*/


import express, { Request, Response } from "express";
import cors from "cors";
require("dotenv").config();

const PORT = process.env.PORT || 7070;
const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());

// const testRoute = require("./routes/testRoute");
// app.use("/test", testRoute);
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

app.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        res.send(" :) ");
    } catch (err) {
        console.log('error at empty request: ', err);
        res.status(500).send(err);
    }
});

