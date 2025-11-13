import { useContext } from "react";
import "./context-styles.css";
import myContext from "./context";
import D from "./D";
function C() {
  var data = useContext(myContext);
  return (
    <div className="C-context">
      <h2>C Component : {data}</h2>
      <D />
    </div>
  );
}

export default C;
