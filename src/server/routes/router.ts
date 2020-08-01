import express  from "express";
import passport from "passport";

const router: express.Router = express.Router();

router.get("/*", (req: express.Request, res: express.Response) => {
  res.render("index");
});

router.post("/auth/ping", (req, res) => {
  if (req.user)
    res.status(200).send({ msg: "pong!" });
  else
    res.status(401).send({ msg: "you're not authorized" });
});

router.post("/auth/login", passport.authenticate("local", {
  session: true
}), (req, res) => {
  res.status(200).send({ msg: "successfully authorized" });
});

router.post("/auth/register", (req, res) => {
});


export default router;
