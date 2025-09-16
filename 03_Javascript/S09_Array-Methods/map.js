var arr = [10, 20, 30, 40, 50];

var newArray = arr.map(function (element, index) {
  var result = element * 10;
  return result; //[100,200,300,400,500]
});

console.log(newArray);
