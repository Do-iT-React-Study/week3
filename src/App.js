import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Info from "./Info";
import Counter from "./Counter";
import IterationSample from "./IterationSample";

function App() {
  //가시성
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <button onClick={()=> setVisible(!visible)}>{visible ? "숨기기" : "보이기"}</button>
      <hr />
      <Counter />
      {visible && <Info />} */}

      <IterationSample />

    </div>
  );
}

export default App;
