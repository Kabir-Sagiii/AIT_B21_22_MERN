import { useContext } from "react";
import loginContext from "./loginContext";
import Login from "./Login";
import Home from "./Home";
function Main() {
  const { state } = useContext(loginContext);

  return <div>{state ? <Home /> : <Login />}</div>;
}

export default Main;
