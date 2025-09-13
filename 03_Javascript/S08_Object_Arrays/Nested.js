var user = {
  id: 101,
  name: {
    title: "Mr",
    firstName: "Raj",
    lastName: "Verma",
  },
  gender: "male",
  location: {
    city: "Indore",
    state: "MP",
    getPinCode: {
      vishalNagar: function () {
        return 897654;
      },
      centerMarket: function () {
        return 789123;
      },
    },
  },
};

// var value = user.name.firstName;
var value = user.location.getPinCode.centerMarket();
console.log(value);
