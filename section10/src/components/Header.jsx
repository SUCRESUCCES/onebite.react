import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// 자신이 받는 props가 변경되지 않으면 다시 리렌더링 되지 않음
// const memoizezdHeader = memo(Header);

// export default memoizezdHeader;

// 위의 두줄 이렇게 단축해도 가능
export default memo(Header);
