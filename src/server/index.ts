import path from "path";

import express from "express";
import helmet  from "helmet";
import session from "express-session";

import router   from "./routes/router";
import pdb      from "./db";
import passport from "./auth"

import config from "./utils/config";

const app: express.Application = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("trust proxy", 1);
app.use(session(config.sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());

app.use("/", router);
app.use("/scripts", express.static(path.join(__dirname, "../scripts")));
app.use("/images",  express.static(path.join(__dirname, "../images")));

app.use((req: express.Request, res: express.Response) => {
  res.status(404).render("404");
});

app.listen(config.port, () => {
  console.log(`server listening: ${config.port}`);
});
