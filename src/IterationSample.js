//IterationSample.js

import React, { useState } from "react";

const IterationSample = () => {
  //const names = ["눈사람", "얼음", "눈", "바람"];

  const [names, setNames] = useState(
    [
      {id:1, text:'aaa'},
      {id:2, text:'bbb'},
      {id:3, text:'ccc'},
      {id:4, text:'ddd'}
    ]
  );
  const [inputText,setInputText] = useState("");
  const [nextId,setNextId] = useState(5);

  

  const OnChangeText= (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat(
      {id:nextId, text:inputText}
    );

    setNextId(nextId +1);
    setNames(nextNames);
    setInputText("");
  }

  const onRemove = (id) => {

    const onNames = names.filter((name)=> name.id != id);
    setNames(onNames)
  }

  const nameList = names.map((name) => 
  <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{"key = "+name.id+", name = "+name.text}</li>);

  return (
    <>
    <input value={inputText} onChange={OnChangeText}/>
    <button onClick={onClick}>추가</button>
    <ul>{nameList[0]}</ul>
    </>
  );
};

export default IterationSample;
