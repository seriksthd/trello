import React from "react";
import { useSelector } from "react-redux";
import {  SyncLoader } from "react-spinners";
import styled from "styled-components";

export default function Loading() {
  const { isLoading } = useSelector((state) => state.todos);

  if (isLoading) {
    return (
      <StyleLoading>
        <SyncLoader />
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
