var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);
<<<<<<< HEAD

var request;

describe("POST /api/examples", function() {
=======
var request;

describe("POST /api/accounts", function() {
>>>>>>> 50defd3c9fb6cbac8038bb2b677d164ca5c36269
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });
<<<<<<< HEAD

  it("should save an example", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      text: "Example text",
      description: "Example description"
    };

    // POST the request body to the server
    request
      .post("/api/examples")
=======
  it("should save a user", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      username: "Example user",
      password: "Example password",
      total: 100,
      checking: 0,
      savings: 0
    };
    // POST the request body to the server
    request
      .post("/api/accounts")
>>>>>>> 50defd3c9fb6cbac8038bb2b677d164ca5c36269
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});
