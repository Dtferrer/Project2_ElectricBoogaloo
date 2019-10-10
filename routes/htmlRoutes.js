var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  app.get("/login", function(req, res) {
    res.render("index", {
      msg: "Login"
    });
  });

  //accounts page
  app.get("/accounts/:accountId", function(req, res) {
    db.Account.findAll({
      where: {
        AccountId: req.params.accountId
      }
    })
      .then(function(accounts) {
        res.render("account-page", {
          msg: "Hey!",
          accounts: accounts
        });
      })
      .catch(function(err) {
        console.log(
          "ERR - Failed to load Accounts for User ID: " + userId,
          err
        );
        res.redirect("404");
      });
  });

  // Load example page and pass in an example by id
  app.get("/accounts/:accountId/shop", function(req, res) {
    db.Purchase.findAll({ where: { AccountId: req.params.accountId } })
      .then(function(purhases) {
        res.render("shop", {
          purhases: purhases
        });
      })
      .catch(function(err) {
        console.log("ERR - Failed to load purchases", err);
        res.render("404");
      });
  });

  app.get("/videos", function(req, res) {
    res.render('videos');
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
