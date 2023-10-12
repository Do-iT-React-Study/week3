import React, { useEffect } from "react";
import { useState } from "react";

const Info = () => {
  //이름
  const [name, setName] = useState("");

  //닉네임
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  }

  //useEffect 사용해보기

  useEffect(() => {
    console.log("useEffect가 실행됨");
    console.log("name: ", name);
  }, [name]);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <br />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
