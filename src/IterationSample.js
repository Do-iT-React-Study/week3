//IterationSample.js

import React from "react";
import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "ajou" },
    { id: 2, text: "apple" },
    { id: 3, text: "chaemin" },
    { id: 4, text: "dinner" },
  ]);

  const [inputText, setInputText] = useState("");

  //새로운 상태 id값을 관리하고자 하는 hook
  const [nextId, setNextId] = useState(5);

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    console.log("onClick이벤트가 실행됨");
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChangeText} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
