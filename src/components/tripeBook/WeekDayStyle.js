import styled from "styled-components";

export const WeekDayStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  min-height: 89svh;
  gap: 10px;
  padding: 15px;
  h1 {
    color: white;
  }

  .tripe-book-btn {
    background: #132172;
    color: white;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 8px;
    transition: all.3s;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #6373ce;
      color: #000;
    }
    &:active {
      scale: 0.94;
    }
  }
`;
