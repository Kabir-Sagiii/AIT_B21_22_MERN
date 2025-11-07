import "./title.css";

import { useState } from "react";

function NewTitle() {
  var [state, setState] = useState("NodeJS & Express JS");

  function updateState() {
    setState("Node JS & Express JS is used to develop Backend Application");
  }

  return (
    <div className="title-container">
      <h1>{state}</h1>
      <br />
      <button onClick={updateState}>Change Content</button>
    </div>
  );
}

export default NewTitle;
