import express from "express";
import path    from "path";

import router  from "./routes/router";

const app: express.Application = express();
const port: Number = Number(process.env.PORT) || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use("/scripts", express.static(path.join(__dirname, "../scripts")));
app.use("/styles",  express.static(path.join(__dirname, "../styles")));
app.use("/images",  express.static(path.join(__dirname, "../images")));

app.use((req: express.Request, res: express.Response) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`server listening: ${port}`);
});
