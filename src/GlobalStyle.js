import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

 /* Cal.css */

  .rmdp-range:has(.reserved) {
    background-color: #8fb4f9;
  }

  .rmdp-range:has(.in-service) {
    background-color: #cc0303;
  }

  div.reserved {
    background-color: #8fb4f9;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  div.in-service {
    background-color: #cc0303;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .un-availble {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .un-availble p {
    margin: 0;
  }

`;
