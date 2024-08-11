import React from "react";
import Headers from "./Header/Headers";
import MainComp from "./Main/MainComp";

const Base = () => {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-inter md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Headers></Headers>
        <MainComp></MainComp>
      </div>
    </div>
  );
};

export default Base;
