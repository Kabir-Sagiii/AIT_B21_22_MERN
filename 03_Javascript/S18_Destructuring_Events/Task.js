function fn() {
  return {
    name: "raj",
    gender: "male",
  };
}

// var user = fn();

// console.log(user.name);

// console.log(user.gender);

var { name, gender } = fn();

console.log(name);
console.log(gender);

// function f1(product) {
//   console.log(product.pname);
// }

function f1({ pname, price, reviews: { user1, user2 } }) {
  console.log(pname);
  console.log(price);
}

f1({ pname: "Iphone 17", price: 90000, reviews: { user1: "", user2: "" } });

//------------------------------------------------------------------

function fnArray() {
  var city = "pune";

  function innerFn() {
    console.log("I am inner Function");
  }

  return [city, innerFn];
}

// var arr = fnArray();

// console.log(arr[0]);
// arr[1]();

var [city, innerFn] = fnArray();

console.log(city);
innerFn();
