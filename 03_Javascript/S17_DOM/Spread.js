var obj1 = {
  name: "abhi",
  gender: "male",
  city: "hyderabad",
};

var obj2 = {
  ...obj1,
  email: "abhj@gmail.com",
  state: "TS",
  name: "Vedh",
};

var arr1 = [10, 20, "sagar", true];

var arr2 = [...arr1];

console.log(arr1);
console.log("-----------------------------");
console.log(arr2);
