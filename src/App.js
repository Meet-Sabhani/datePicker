import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import CalendarTime from "./components/DateDisable";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <CalendarTime />
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
