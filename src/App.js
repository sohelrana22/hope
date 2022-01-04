import "./App.css";

import Home from "./components/Pages/Home/Home";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctors from "./components/Pages/Doctors/Doctors";

// // AOS Animation Init
// AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
