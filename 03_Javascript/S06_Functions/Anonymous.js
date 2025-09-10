var myfun = function () {
  var username = "Raj";
  console.log(username);
};
myfun();

function getUserDetails(getId) {
  console.log("User Details");
  console.log(getId);
  getId();
}

getUserDetails(function () {
  console.log("I am Anonymous function passed as a argument");
});
