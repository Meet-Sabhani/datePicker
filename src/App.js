import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import CalendarTime from "./components/DateDisable";
import "react-calendar/dist/Calendar.css";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <CalendarTime />
    </>
  );
};
