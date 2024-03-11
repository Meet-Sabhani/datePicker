import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Cal } from "./components/Cal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calenter from "./components/Calenter";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Cal />
      {/* <Calenter /> */}
    </>
  );
};
