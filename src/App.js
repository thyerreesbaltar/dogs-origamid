import React from "react";
import './App.css';

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import {User} from './Components/User/User'
import { ProtectedRoute } from "./Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>

          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />

          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>

    </div>
  );
}

export default App;
