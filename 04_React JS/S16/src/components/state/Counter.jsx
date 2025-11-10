import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    // setCount(count + 1); // 0 +1  = 1
    // setCount(count + 3); // 0 + 3 = 3
    // setCount(count + 2); // 0 + 2 = 2
    // setCount(count + 1); // 0 +1 = 1
    //re-rendering  1 time

    //updater function
    setCount((prevState) => {
      //0
      //logic
      return prevState + 1;
    });

    setCount((prevState) => {
      // 1
      //logic
      return prevState + 1;
    });

    setCount((prevState) => {
      //2
      //logic
      return prevState + 3;
    });
  }

  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value is : {count}</h1>
      <br />
      <button onClick={increaseCount}>inc Count</button>
    </div>
  );
}

export default Counter;
