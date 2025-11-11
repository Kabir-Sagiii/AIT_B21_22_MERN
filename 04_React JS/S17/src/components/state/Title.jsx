import "./Title.css";

import { useState } from "react";

function Title() {
  var array = useState("React JS Library");
  // array = [variable, setter-function]
  //  array[0]      array[1]

  function updateState() {
    array[1]("React JS is a Frontend Library based on JS");
  }

  return (
    <div className="title-container">
      <h1>{array[0]}</h1>
      <br />
      <button onClick={updateState}>Change Content</button>
    </div>
  );
}

export default Title;
