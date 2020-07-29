import path from "path";

import express  from "express";
import passport from "passport";

const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.render("index");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
}));

export default router;
