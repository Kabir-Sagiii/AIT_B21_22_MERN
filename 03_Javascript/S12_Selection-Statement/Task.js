function findDesignation(exp) {
  if (exp > 0 && exp <= 2) {
    console.log("Employee is Junior Developer");
  } else if (exp > 2 && exp <= 5) {
    console.log("Employee is Senior Developer");
  } else if (exp > 5 && exp <= 8) {
    console.log("Employee is Team Lead");
  } else if (exp > 8 && exp <= 12) {
    console.log("Employee is Project Manager");
  } else if (exp > 12) {
    console.log("Employee is Software Architect");
  } else {
    console.log("Add Valid expereice");
  }
}

findDesignation(1.9);
