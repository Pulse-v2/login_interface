import "./App.scss";
import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./components/Login.tsx";
import ForgotPassword from "./components/ForgotPassword.tsx";
import NewPassword from "./components/NewPassword.tsx";

import "./types/index.d.ts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Routes>
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/newpass" element={<NewPassword />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
