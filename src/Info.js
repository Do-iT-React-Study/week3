import React from "react";
import { useState } from "react";
import react, { useEffect } from "react";


const Info = () => {
  //이름
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  //닉네임

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  //useEffect 사용해보기
  useEffect(() => {
    console.log("useEffect가 실행됨");
  },[name]);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <div>
        <div>
          <b>이름:{name}</b>
        </div>
        <div>
        <input value={nickname} onChange={onChangeNickName} />
      </div>
        <div>
          <b>닉네임:{nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
