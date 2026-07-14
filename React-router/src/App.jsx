import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Error404Page from "./components/Error404Page";
import MasterLayout from "./components/MasterLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />

          <Route element={MasterLayout()}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route element={<ProtectedRoute setAuth={auth} />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="/*" element={<Error404Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
