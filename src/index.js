import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import { useState } from "react";
import ApiContext from "./components/ApiContext";
import Logout from "./components/Logout";
import Post from "./components/Single";
import Search from "./components/Search";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000",
    },
  },
});

const Index = () => {
  const api = useState("http://127.0.0.1:8000/api/");

  return (
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <ApiContext.Provider value={api}>
            <Header />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="/search" element={<Search />} />
            </Routes>
            <Footer />
          </ApiContext.Provider>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
