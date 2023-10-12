//IterationSample.js

import React, { useState } from "react";
const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: "ajou" },
    { id: 2, text: "apple" },
    { id: 3, text: "chaemin" },
    { id: 4, text: "dinner" },
  ]);

  const [inputText, setInputText] = useState("");
  //새로운 상태 id 값을 관리하고자 하는 hook
  const [nextId, setNextId] = useState(5);
  const onchangeText = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    console.log("onClick이벤트가 실행됨");
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setName(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setName(nextNames);
  };

  const nameList = names.map((name) => {
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>;
  });
  return (
    <>
      <input value={inputText} onChange={onchangeText} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
