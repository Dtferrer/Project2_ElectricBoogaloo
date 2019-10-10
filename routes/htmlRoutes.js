var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load sign up page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Load example page and pass in an example by id
  app.get("/user/:userId/accounts", function(req, res) {
    db.Account.findOne({ where: { id: req.params.userIdd } }).then(function(
      dbAccount
    ) {
      res.render("account-page", {
        username: dbAccount
      });
    });
  });

  // Load shop page
  app.get("/shop", function(req, res) {
    res.render("shop");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
