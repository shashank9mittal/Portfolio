import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default AppLayout;
