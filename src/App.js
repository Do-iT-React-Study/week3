import logo from "./logo.svg";
import "./App.css";
import Info from "./Info";
import { useState } from "react";
import Counter from "./Counter";
import IterationSample from "./IterationSample";

function App() {
  //가시성
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <button>{visible ? "숨기기" : "보이기"}</button>
      <hr /> */}
      <Counter />
    </div>
  );
}

export default App;
