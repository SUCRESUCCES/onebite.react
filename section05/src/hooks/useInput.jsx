import { useState } from "react";

function useInput() {
  // use 접두사를 사용하는 함수는 커스텀 훅이라고 인식
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
