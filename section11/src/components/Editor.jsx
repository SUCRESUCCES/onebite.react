import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // Enter키 누르면 자동으로 onSubmit()이 실행되서 엔터만으로도 todo 추가 가능
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 입력값이 없을 때 포커스
      return;
    }
    onCreate(content); // App에서 전달된 함수 호출
    setContent(""); // 입력창 초기화
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown} // 사용자가 키보드를 누를 때 발생하는 이벤트
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
