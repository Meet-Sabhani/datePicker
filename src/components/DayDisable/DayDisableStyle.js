import styled from "styled-components";

export const DayDisableStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh;
  align-items: center;
  gap: 20px;
  background: grey;
  flex-direction: column;

  h1 {
    color: #fff;
  }

  .disable-btn {
    background: #000;
    color: white;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 8px;
    transition: all.3s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #000;
    }
    &:active {
      scale: 0.94;
    }
  }
`;
