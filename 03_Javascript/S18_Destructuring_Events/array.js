var arr = [10, 20, 30];

var [ref1, ref2, ref3] = arr;

function f1() {
  //   console.log(arr[2]); //30
  //   console.log(arr[0]); //10

  console.log(ref3); //30
  console.log(ref1); //10
}

function f2() {
  //   console.log(arr[0]); //10

  console.log(ref1); //10
}
f1();
f2();
