//IterationSample.js

import React from "react";
import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {id:1, text:'one'},
    {id:2, text:'two'},
    {id:3, text:'three'},
    {id:4, text:'four'},
  ]);

  const [inputText, setInputText] = useState("");

  const [nextId, setNextId] = useState(5);

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId+1);
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
    </li>));

  return (
    <>
      <input value={inputText} onChange={onChangeText}/>
      <button onClick={onClick}>버튼</button>
      <ul>{nameList}</ul>
    </>
  )
};

export default IterationSample;
