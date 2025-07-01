import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* BrowerRouter로 App을 감싸게 되면
      1. 현재 브라우저 주소를 사용할 수 있음
      2. 주소(URL) 변화 감지가 가능함 
      3. 페이지 라우팅과 관련된 모든 데이터들 공급 받을 수 있음
    */}
    <App />
  </BrowserRouter>
);
