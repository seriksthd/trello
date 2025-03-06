import React, { useState } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function MainLyout() {
  return (
    <div>
      <div style={{ paddingBottom: "50px" }}>
        <Header />
      </div>
      <Outlet />
    </div>
  );
}
