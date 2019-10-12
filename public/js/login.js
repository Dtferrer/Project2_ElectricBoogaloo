var $user = $("#user");
var $exampleInputPassword1 = $("#exampleInputPassword1");
var $submitBtn = $("#submit");

console.log("DING");

var API = {
  findUser: function(username) {
    return $.ajax({
      url: "api/accounts/" + username,
      type: "GET"
    });
  }
};

var findingUser = function(Account) {
  console.log("Dong!");
  API.findUser(Account.username).then(function(data) {
    location.href = "/accounts/" + data.username;
  });
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  console.log("ding!");

  var Account = {
    username: $user.val(),
    password: $exampleInputPassword1.val()
  };

  console.log(Account);

  if (!(Account.username && Account.password)) {
    alert("You must enter both a username and password!");
    return;
  }

  findingUser(Account);
};

$submitBtn.on("click", handleFormSubmit);
