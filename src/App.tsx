import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { UserList } from "./Users/UserLIst";
import { UserCreate } from "./Users/UserCreate";
import LoginPage from "./Users/LoginPage";

export const baseURL = "https://localhost:7162";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userList" element={<UserList />}></Route>
        <Route path="/userCreate" element={<UserCreate />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
