var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;
// Setting up the chai http plugin
chai.use(chaiHttp);
var request;
describe("GET /api/accounts", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });
  it("should find all accounts", function(done) {
    // Add some examples to the db to test with
    db.Account.bulkCreate([
      {
        username: "First Example",
        password: "First Password",
        total: 120,
        checking: 60,
        savings: 60
      },
      {
        username: "Second Example",
        password: "Second Password",
        total: 100,
        checking: 60,
        savings: 40
      }
    ])
      .then(function() {
        // Request the route that returns all examples
        request.get("/api/accounts").end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;
          // Run assertions on the response
          expect(err).to.be.null;
          expect(responseStatus).to.equal(200);
          expect(responseBody)
            .to.be.an("array")
            .that.has.lengthOf(2);
          expect(responseBody[0])
            .to.be.an("object")
            .that.includes({
              username: "First Example",
              password: "First Password",
              total: 120,
              checking: 60,
              savings: 60
            });
          expect(responseBody[1])
            .to.be.an("object")
            .that.includes({
              username: "Second Example",
              password: "Second Password",
              total: 100,
              checking: 60,
              savings: 40
            });
          // The `done` function is used to end any asynchronous tests
          done();
        });
      })
      .catch(function(err) {
        console.log("ERR - GET TEST", err);
        done();
      });
  });
});
