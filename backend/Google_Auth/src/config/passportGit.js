import passport from "passport";
import { Strategy as GitHubStrategy } from 'passport-github2'
import { config } from "./config.js";




passport.use(new GitHubStrategy(
    {
        clientID: config.GIT_CLIENT_ID,
        clientSecret: config.GIT_CLIENT_SECRET,
        callbackURL: config.GIT_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
        try {
            return done(null, profile);
        } catch (err) {
            return done(err);
        }
    }
))

export default passport