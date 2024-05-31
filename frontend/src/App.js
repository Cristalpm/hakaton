import "./App.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";

function App() {
  const [isEnter, setIsEnter] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header isEnter={isEnter} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/login"
            exact
            element={<Login setIsEnter={setIsEnter} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
