import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DayDisable from "./components/DayDisable/DayDisable";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { TripeBook } from "./components/tripeBook/TripeBook";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<DayDisable />} />
        <Route path="/tripeBook" element={<TripeBook />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
