function myFun() {
  var x = 10;
  let city = "pune";

  function innerFn() {
    if (true) {
      var y = 20;
      let price = 100.45;
      console.log(x, city, price);
    }

    console.log(y, city, price);
  }

  innerFn();
  //   console.log(y);
  console.log(city);
}

myFun();
