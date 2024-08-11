import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div class='bg-customBlue leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;
