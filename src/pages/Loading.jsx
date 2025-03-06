import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import iconsLoading from "/src/assets/icons/24976c46bbf8be9db663.svg";
export default function Loading() {
  const { isLoading } = useSelector((state) => state.trello);

  if (isLoading) {
    return (
      <StyleLoading>
        <img src={iconsLoading} alt="" />
      </StyleLoading>
    );
  }
}
const spin = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
`;
const StyleLoading = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 100;
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
  }
`;
