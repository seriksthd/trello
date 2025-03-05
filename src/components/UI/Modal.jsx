import React from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

export default function Modal({ onClose }) {
  return createPortal(
    <>
      <Backdrop onClick={onClose} />
    </>,
    document.getElementById("root-modal")
  );
}
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;
