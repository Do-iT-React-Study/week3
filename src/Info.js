import React, { useEffect } from "react";
import { useState } from "react";

const Info = () => {
  //이름
  const [name, setName] = useState("");

  //닉네임
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  //useEffect 사용해보기(변수가 바뀔때마다 실행됨)
  useEffect(() => {
    console.log("useEffect가 실행됨");
    console.log("name", name);
  }, [name]);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:{nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
