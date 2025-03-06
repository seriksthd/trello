import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Loading() {
  const { isLoading } = useSelector((state) => state.todos);
  const Icons = { Loading };
  if (isLoading) {
    return (
      <StyleLoading>
        <img src="src/assets/icons/24976c46bbf8be9db663.svg" alt="" />
      </StyleLoading>
    );
  }
}
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
`;
