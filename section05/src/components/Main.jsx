import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다
// const Main = () => {
//   const number = 10;
//   const obj = { a: 1 };
//   return (
//     <main>
//       {/* 최상위 태그 하나 : main,div 등... */}
//       {/* 없으면 <>빈태그로 가능 */}
//       <h1>main</h1>
//       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
//       {10}
//       {number}
//       {/* 주의사항 1 */}
//       {/* {if()}  조건문 사용불가 */}
//       {/* {for()} 반복문 사용불가 */}
//       {[1, 2, 3]}
//       {/* 주의사항 2 */}
//       {true}
//       {undefined}
//       {null}
//       {/* {obj} 객체는 렌더링 불가능*/}
//       {obj.a}
//     </main>
//   );
// };

const Main = () => {
  const user = {
    name: "얌",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div className="logout">
        {/* <div style={{ backgroundColor: "red", borderBottom: "5px solid blue" }}> */}
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
