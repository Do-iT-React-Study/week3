import React from "react";
import { useState } from "react";

const Info = () => {
  //이름
  const [name, setName] = useState("");

  //닉네임

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  //useEffect 사용해보기

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
