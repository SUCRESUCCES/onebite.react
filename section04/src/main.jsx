import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// createRoot : 인수로 전달받은 HTML 요소를 리액트의 루트로, 즉 뿌리로 만들어주는 역할
// render를 통해 렌더링
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
