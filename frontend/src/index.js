import React from "react";
import SearchPage from "./SearchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactDOM from "react-dom/client"
import "./index.css"

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component= {SearchPage}/>
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  </BrowserRouter>
  </div>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
