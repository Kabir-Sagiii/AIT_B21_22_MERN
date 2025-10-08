var obj = {
  //objectname.property keyname
  name: "Vedh",
  gender: "male",
  city: "mumbai",
};

var { gender, city } = obj;

function f1() {
  console.log(city); // mumbai
  console.log(obj.name); //Vedh
}

function f2() {
  console.log(obj.name); //Vedh
}

function f3() {
  console.log(gender); //male
  console.log(city);
}

f1();
f2();
f3();
