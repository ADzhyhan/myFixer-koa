const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const dotenv = require('dotenv');

dotenv.config();

const { UserDB } = require('../../models/user/UserDB');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: process.env.secretKey,
};

module.exports = new JwtStrategy(opts, (jwtPayload, done) => {
  if (jwtPayload.expiresIn <= new Date().getTime()) {
    done({ isPassport: true, message: 'Expired access token.' }, false);
  }

  UserDB.getUserById(jwtPayload.id)
    .then((user) => done(null, user))
    .catch((err) => done({ isPassport: true, message: err.message }, false));
});
