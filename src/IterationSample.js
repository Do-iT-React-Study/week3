//IterationSample.js

import React from "react";
import { useState } from "react";
const IterationSample = () => {

  const [names, setNames] = useState([
    {id: 1, text: "눈사람"},
    {id: 2, text: "얼음"},
    {id: 3, text: "눈"},
    {id: 4, text: "바람"}
  ])

  const [inputText, setInputText] = useState("");

  // 새로운 상태 id 값을 관리하고자 하는 hook
  const [nextId, setNextId] = useState(5);
  const onChangeText = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };



  const onClick = () => {
    console.log("onclick 이벤트 실행됨");
    const nextNames = names.concat({
      id: nextId, 
      text: inputText
    }); 
    setNextId(nextId +1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }
  const nameList = names.map((name) => <li key = {name.id} onDoubleClick = {() => onRemove(name.id)}>{name.text}</li>);
  return (
    <>
      <input value = {inputText} onChange={onChangeText}/>
      <button onClick = {onClick} >추가</button>
      <ul >{nameList}</ul>
    </>
  );
};



export default IterationSample;
