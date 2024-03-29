var db = require("../models");
module.exports = function(app) {
  // Create a new user
  app.post("/api/accounts", function(req, res) {
    db.Account.create(req.body).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });
  // Find existing user
  app.get("/api/accounts", function(req, res) {
    db.Account.findOne({
      where: { username: req }
    }).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });
  // Find all users
  app.get("/api/accounts", function(req, res) {
    db.Account.findAll({}).then(function(dbAccount) {
      res.json(dbAccount);
    });
  });
  // Track user account banking information
  app.get("/api/accounts/:accountId", function(req, res) {
    db.Account.findOne({
      where: {
        username: req.params.accountId
      }
    }).then(function(dbAccount) {
      console.log(dbAccount);
      res.json(dbAccount);
    });
  });
};
