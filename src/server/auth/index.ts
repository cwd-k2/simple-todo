import bcrypt       from "bcrypt";
import passport     from "passport";
import { Strategy } from "passport-local";

import pdb  from "../db";

const strategy = new Strategy((
  username, password, done
) => {

  pdb.one(
    `select * from "Authenticate" where username = '${username}'`,
  ).then((auth) => {

    bcrypt.compare(password, auth.password, (err, res) => {
      res ? done(null, { id: auth.userId }) : done(null, false);
    });

  }).catch(() => {
    console.log("oops");
    done(null, false);
  });

});

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log("serializing");
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserializing");
  console.log(user);
  done(null, user);
});

export default passport;
