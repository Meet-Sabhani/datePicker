import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DayDisable from "./components/DayDisable/DayDisable";
import { WeekDay } from "./components/weekDays/WeekDay";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <WeekDay /> */}
      <DayDisable />
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
