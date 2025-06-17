// props의 기본값 설정할 때
// : 구조분해할당으로 기본값 받기
const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton} // 함수의 이름만 전달
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};
export default Button;
