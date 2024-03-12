import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background: #000;
  gap: 15px;
  a {
    color: #fff;
    padding: 6px;
    border-radius: 7px;
    text-decoration: none;
    font-size: 26px;
    transition: all.4s;
  }
  .active {
    background: #fff;
    color: #000;
  }
`;
