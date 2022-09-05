import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/posts/header";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/posts/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import About from "./components/extras/About";
import { useState } from "react";
import ApiContext from "./components/auth/ApiContext";
import Logout from "./components/auth/Logout";
import Post from "./components/posts/Single";
import Search from "./components/posts/Search";
import Error from "./components/extras/NotFound";
import Admin from "./components/Admin";
import Create from "./components/admin/Create";
import Edit from "./components/admin/Edit";
import Delete from "./components/admin/Delete";

const theme = createTheme({
  palette: {
    background: {
      default: "#111827",
    },
    primary: {
      main: "#0279BF",
    },
    secondary: {
      main: "#111827",
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
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/create" element={<Create />} />
              <Route path="/admin/edit/:id" element={<Edit />} />
              <Route path="/admin/delete/:id" element={<Delete />} />
              <Route path="*" element={<Error />} />
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
