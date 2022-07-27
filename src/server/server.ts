// this is the start of the server routes - initialize the server here

import * as express from "express";
import baseRouter from "./Routes/index";

import { configurePassport } from "../server/ServerUtils/JWTStrategies";

const app = express();

configurePassport(app);

app.use(express.static("public"));
app.use(express.json());
app.use(baseRouter);
app.use(`*`, (req, res) => {
  res.status(420).json({ message: `wrong route` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
