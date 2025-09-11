var user = {
  name: "riya",
  gender: "female",
  city: "mumbai",
  id: 9999,
  display: function () {
    console.log("user-details");
  },
  changeName: function (newName) {
    user.name = newName;
    console.log(user);
  },
};

user.display();

user.changeName("Rohila");

console.log();
