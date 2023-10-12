//IterationSample.js

import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {id:1, text:'민식'},
    {id:2, text:'채민'},
    {id:3, text:'유태'},
    {id:4, text:'다현'},
  ]);

  const[inputText, setInputText] = useState("");
  const[nextId, setNextId] = useState(5);
  const onBClick = () => {
    const nextNames = names.concat({
      id:nextId, 
      text:inputText
    });
    setNextId(nextId+1);
    setNames(nextNames);
    setInputText("");
  };

  const onChangeText = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name)=> name.id !== id)
    setNames(nextNames);
  }; 
  const nameList = names.map((name) => <li key = {name.id} onDoubleClick={() => onRemove(name.id)}>
    {name.text}
    </li>);
  return (
    <>
    <input value={inputText} onChange={onChangeText} />
    <button onClick={onBClick} >추가</button>
    <ul>{nameList}</ul>
    </>

  );
};

export default IterationSample;
