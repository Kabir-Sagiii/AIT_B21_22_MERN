function step1(next) {
  console.log("Preparing....");
  setTimeout(() => {
    //cooking
    console.log("Preparation is done");
    next();
  }, 4000);
}

function step2(next) {
  console.log("cooking....");
  setTimeout(() => {
    //serving
    console.log("Food Cooked");
    next();
  }, 2000);
}

function step3() {
  console.log("serving....");
}

step1(() => {
  step2(() => {
    step3();
  });
});
