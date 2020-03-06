const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_AUTU0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTU0_DOMAIN}/`,
  algorithms: ["RS256"],
});

const app = express();

app.get("/public", function(req, res) {
  res.json({
    message: "Hello world",
  });
});

app.get("/private", checkJwt, function(req, res) {
  res.json({
    message: "Hello private world",
  });
});

app.listen(3001);
console.log("API working");
