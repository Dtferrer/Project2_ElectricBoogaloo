var db = require("../models");
console.log("db.Purchase", db.Purchase);
console.log("db.Account", db.Account);

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //create user
  app.get("/signup", function(req, res) {
    res.render("signup", {
      msg: ""
    });
  });

  //accounts page
  app.get("/accounts/:accountId", function(req, res) {
    console.log("finding account...");
    db.Account.findOne({
      where: {
        username: req.params.accountId
      }
    })
      .then(function(accounts) {
        console.log("accounts", accounts);
        res.render("account-page", {
          accounts: accounts
        });
      })
      .catch(function(err) {
        console.log(
          "ERR - Failed to load Accounts for User ID: " + AccountId,
          err
        );
        res.redirect("404");
      });
  });

  // Load example page and pass in an example by id
  app.get("/accounts/:accountId/shop", function(req, res) {
    console.log("finding purchases...");
    db.Purchase.findAll({ where: { AccountId: req.params.accountId } })
      .then(function(purhases) {
        console.log("purchases", purhases);
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
    res.render("videos");
  });

  // Load shop page
  app.get("/shop", function(req, res) {
    res.render("shop");
  });


  app.get("/games", function(req, res) {
  res.render("games");
  });
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
