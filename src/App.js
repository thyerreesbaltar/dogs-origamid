import React from "react";
import './App.css';
import { Api } from './api/Api'
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>

          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />

          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>

    </div>
  );
}

export default App;
