import React, { useState } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Loading from "../../pages/Loading";

export default function MainLyout() {
  return (
    <div>
      <div style={{ paddingBottom: "50px" }}>
        <Header />
      </div>
      <Loading/>
      <Outlet />
    </div>
  );
}
