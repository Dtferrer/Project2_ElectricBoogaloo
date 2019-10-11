// Get references to page elements
var $user = $("#user");
var $exampleInputPassword1 = $("#exampleInputPassword1");
var $submitBtn = $("#submit");

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

  var Account = {
    username: $user.val().trim(),
    password: $exampleInputPassword1.val().trim()
  };

  if (!(Account.username && Account.password)) {
    alert("You must enter both a username and password!");
    return;
  }

  API.createUser(example).then(function() {
    location.href = "/";
  });

  $user.val("");
  $exampleInputPassword1.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
