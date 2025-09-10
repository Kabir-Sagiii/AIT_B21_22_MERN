var x = () => {
  console.log("Arrow Function");
};
x();

function getDetails(getAddress) {
  getAddress();
}

getDetails(() => {
  console.log("Arrow function as a argument");
});
