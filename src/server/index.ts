import path    from "path";

import express from "express";
import helmet  from "helmet";
import session from "express-session";

import router  from "./routes/router";

const app: express.Application = express();
const port: Number = Number(process.env.PORT) || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("trust proxy", 1);
app.use(session({
  name: "blah blah blah",
  secret: "what is your favorite editor?",
  resave: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60
  }
}));

app.use(helmet());

app.use("/", router);
app.use("/scripts", express.static(path.join(__dirname, "../scripts")));
app.use("/images",  express.static(path.join(__dirname, "../images")));

app.use((req: express.Request, res: express.Response) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`server listening: ${port}`);
});
