import path from "path";

import express  from "express";
import passport from "passport";

const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  if (req.user) {
    res.render("index");
  } else {
    res.redirect("/login");
  }
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
}));

export default router;
