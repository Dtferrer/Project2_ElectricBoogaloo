// Get references to page elements
var $newUser = $("#newUser");
var $exampleInputPassword1 = $("#exampleInputPassword1");
var $submitBtn = $("#submit");

console.log("DING");

// The API object contains methods for each kind of request we'll make
var API = {
  createUser: function(account) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/accounts",
      data: JSON.stringify(account)
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  console.log("ding!");
  var Account = {
    username: $newUser.val(),
    password: $exampleInputPassword1.val(),
    total: 100,
    checking: 50,
    savings: 50
  };

  if (!(Account.username && Account.password)) {
    alert("You must enter both a username and password!");
    return;
  }

  API.createUser(Account).then(function() {
    location.href = "/";
  });

  $user.val("");
  $exampleInputPassword1.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
