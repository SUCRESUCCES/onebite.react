// props의 기본값 설정할 때
// : 구조분해할당으로 기본값 받기
const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
