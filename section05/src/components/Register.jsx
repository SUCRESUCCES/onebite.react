import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // 통합 이벤트 핸들러
  const onChange = (e) => {
    // countRef.current++;

    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // e.target.name : 프로퍼티의 키
    });
  };

  const onsubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name" // 통합이벤트 핸들러로 추가해줌
          value={input.name}
          onChange={onChange} // onChange 통합이벤트핸들러
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="us">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onsubmit}>제출</button>
    </div>
  );
};

export default Register;
