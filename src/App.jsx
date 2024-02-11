import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
      <hr />
      {show && <Hello />}
    </>
  );
};

export default App;
